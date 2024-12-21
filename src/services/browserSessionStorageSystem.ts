import mongoose, { Schema, Document } from "mongoose";
import { Page } from "playwright";
import { encodePassword, decodePassword } from "../utils/hashPwd";
import logger from "../utils/logger";

interface IBrowserSession extends Document {
  uid: string;
  documentId: String;
  cookies: any[];
  key?: string;
  lastUsed: Date;
}

const BrowserSessionSchema = new Schema<IBrowserSession>(
  {
    uid: {
      type: String,
      required: true,
    },
    documentId: {
      type: String,
    },
    cookies: [
      {
        type: Schema.Types.Mixed,
        required: true,
      },
    ],
    key: {
      type: String,
    },
    lastUsed: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const BrowserSession = mongoose.model<IBrowserSession>(
  "BrowserSession",
  BrowserSessionSchema
);

class SessionManager {
  _session: IBrowserSession | null = null;

  async saveSession({
    page,
    uid,
    documentId,
    key,
  }: {
    page: Page;
    uid: string;
    documentId: string;
    key?: string;
  }): Promise<string> {
    try {
      // Get cookies from the current page
      const cookies = await page.context().cookies();

      const _hash = key ? encodePassword(key) : "0";
      const updateFields = { uid, documentId, cookies } as {
        uid: string;
        documentId: string;
        cookies: any[];
        key: string;
      };
      if (key) {
        updateFields.key = _hash;
      }

      const session = await BrowserSession.findOneAndUpdate(
        { uid: uid, documentId },
        { ...updateFields },
        { new: true, upsert: true }
      );

      this._session = session;

      await session.save();
      return session._id.toString();
    } catch (error) {
      logger.error("Error saving browser session:", error);
      throw error;
    }
  }

  async loadSessionToPage({
    uid,
    documentId,
  }: {
    uid: string;
    documentId: string;
  }): Promise<any> {
    try {
      let session = null;

      if (this._session) {
        session = this._session;
      } else {
        session = await BrowserSession.findOne({ uid, documentId });
        this._session = session;
      }

      if (!session) {
        return false;
      }

      // Update last used timestamp
      await BrowserSession.findByIdAndUpdate(session._id, {
        lastUsed: new Date(),
      });

      return session;
    } catch (error) {
      logger.error("Error loading browser session:", error);
      throw error;
    }
  }

  async getHash({ uid, documentId }: { uid: string; documentId: string }) {
    try {
      let session = null;

      if (this._session) {
        session = this._session;
      } else {
        session = await BrowserSession.findOne({ uid, documentId });
        this._session = session;
      }

      const hashedKey = session?.key;

      if (!hashedKey) return null;

      const key = decodePassword(hashedKey);
      return key;
    } catch (error) {
      logger.error("Error saving browser session:", error);
    }
  }

  async clearOldSessions(uid: string, maxAgeDays: number = 7): Promise<void> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - maxAgeDays);

    await BrowserSession.deleteMany({
      uid,
      lastUsed: { $lt: cutoffDate },
    });
  }
}

export { SessionManager, IBrowserSession, BrowserSession };
