import { ObjectId } from "mongodb";
import mongoConnection, {
  ConnectionOptions,
} from "../services/mongoDBConnectionService";
import { MONGODB_URI } from "../config/env";

// Types for the TwoFactor document
interface ITwoFactor {
  _id?: ObjectId;
  uid: string;
  email: string;
  password: string;
  factorCode?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UpdateStatusOptions {
  documentId: string | ObjectId;
  newStatus: string;
}

export async function updateTwoFactorStatus({
  documentId,
  newStatus,
}: UpdateStatusOptions): Promise<boolean> {
  const options: ConnectionOptions = {
    uri: MONGODB_URI as string,
  };

  try {
    // Get database instance
    const db = await mongoConnection.getDatabase(options);

    // Get collection reference
    const collection = db.collection<ITwoFactor>("twofactors");

    // Convert string ID to ObjectId if needed
    const objectId =
      typeof documentId === "string" ? new ObjectId(documentId) : documentId;

    // Perform the update
    const result = await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          status: newStatus,
          updatedAt: new Date(),
        },
      }
    );

    // Return true if document was updated
    return result.modifiedCount === 1;
  } catch (error) {
    console.error("Error updating two factor status:", error);
    throw error;
  }
}
