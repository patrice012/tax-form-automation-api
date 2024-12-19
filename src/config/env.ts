import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const ORIGIN = [process.env.ORIGIN_1, process.env.ORIGIN_2];

export const { MONGODB_URI, PORT, LOG_LEVEL, CHROME_EXECUTABLE_PATH } =
  process.env;
