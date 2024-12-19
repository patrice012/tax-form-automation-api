import { ChangeStream } from "mongodb";
import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env";
import mongoConnection, {
  ConnectionOptions,
} from "../services/mongoDBConnectionService";

interface WatchOptions {
  dbName?: string;
  collectionName: string;
  jobId: string;
}

export const watchJobCollection = async ({
  dbName,
  collectionName,
  jobId,
}: WatchOptions): Promise<ChangeStream> => {
  try {
    const options: ConnectionOptions = {
      uri: MONGODB_URI as string,
      dbName: dbName,
    };
    const db = await mongoConnection.getDatabase(options);
    const collection = db.collection(collectionName);

    // Create the change stream
    console.log("start watching db");
    const changeStream = collection.watch(
      [
        {
          $match: {
            "documentKey._id": new mongoose.Types.ObjectId(jobId),
          },
        },
      ],
      { fullDocument: "updateLookup" }
    );

    // Handle potential errors
    changeStream.on("error", (error) => {
      console.error("Change stream error:", error);
      throw error;
    });

    return changeStream;
  } catch (error) {
    console.error("Error setting up change stream:", error);
    throw error;
  }
};

export function setupJobWatch({ dbName, collectionName, jobId }: WatchOptions) {
  return new Promise(async (resolve, reject) => {
    try {
      const changeStream = await watchJobCollection({
        collectionName,
        jobId,
        dbName,
      });

      const timeout = setTimeout(() => {
        try {
          changeStream?.close();
        } catch (error) {}
      }, 5 * 60 * 1000);

      changeStream.on("change", (change) => {
        console.log("Detected change:", change);

        const newJob = (change as { fullDocument: unknown }).fullDocument;

        try {
          changeStream.close();
          clearTimeout(timeout);
          resolve(newJob);
        } catch (error) {
          console.error("Error claiming job:", error);
        }
      });
    } catch (error) {
      console.error("Error in job watch setup:", error);
    }
  });
}
