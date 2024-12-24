import mongoose, { Schema, Document } from "mongoose";

export interface IBrowserSession extends Document {
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

export { BrowserSession };
