import { MongoClient, Db } from "mongodb";
import logger from "../utils/logger";

interface ConnectionOptions {
  uri: string;
  dbName?: string;
}

class MongoConnectionService {
  private static instance: MongoConnectionService;
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private isConnecting: boolean = false;
  private connectionPromise: Promise<void> | null = null;
  private lastConnectionOptions: ConnectionOptions | null = null;

  private constructor() {}

  public static getInstance(): MongoConnectionService {
    if (!MongoConnectionService.instance) {
      MongoConnectionService.instance = new MongoConnectionService();
    }
    return MongoConnectionService.instance;
  }

  public isConnected(): boolean {
    return !!(this.client && this.db);
  }

  private async connect(options: ConnectionOptions): Promise<void> {
    try {
      if (!this.client) {
        this.client = new MongoClient(options.uri);
        await this.client.connect();

        const dbName = options.dbName || options.uri.split("/").at(-1);
        if (!dbName) {
          throw new Error(
            "Database name not found in URI and not provided in options"
          );
        }

        this.db = this.client.db(dbName);
        this.lastConnectionOptions = options;
        logger.info("MongoDB connection established");
      }
    } catch (error) {
      logger.error("MongoDB connection error:", error);
      this.client = null;
      this.db = null;
      this.lastConnectionOptions = null;
      throw error;
    }
  }

  public async ensureConnection(options: ConnectionOptions): Promise<void> {
    if (this.isConnected()) {
      return;
    }

    if (this.isConnecting) {
      await this.connectionPromise;
      return;
    }

    this.isConnecting = true;
    this.connectionPromise = this.connect(options);

    try {
      await this.connectionPromise;
    } finally {
      this.isConnecting = false;
      this.connectionPromise = null;
    }
  }

  public async getDatabase(options: ConnectionOptions): Promise<Db> {
    await this.ensureConnection(options);
    return this.db!;
  }

  public getLastConnectionOptions(): ConnectionOptions | null {
    return this.lastConnectionOptions;
  }

  public async cleanup(): Promise<void> {
    try {
      if (this.client) {
        await this.client.close();
        this.client = null;
        this.db = null;
        this.lastConnectionOptions = null;
        logger.info("MongoDB connection closed");
      }
    } catch (error) {
      logger.error("Error during MongoDB cleanup:", error);
      throw error;
    }
  }

  public async handleShutdown(): Promise<void> {
    try {
      await this.cleanup();
      logger.info("MongoDB connection cleaned up during shutdown");
    } catch (error) {
      logger.error("Error during MongoDB shutdown:", error);
      process.exit(1);
    }
  }
}

// Export singleton instance
const mongoConnection = MongoConnectionService.getInstance();

// Register cleanup handlers
process.on("SIGINT", async () => {
  await mongoConnection.handleShutdown();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await mongoConnection.handleShutdown();
  process.exit(0);
});

export default mongoConnection;
export type { ConnectionOptions };
