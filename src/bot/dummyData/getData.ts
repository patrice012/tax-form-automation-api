import * as fs from "fs/promises";
import * as path from "path";

export async function getData(): Promise<any> {
  try {
    // Define the path to the test_data.json file
    const filePath = path.resolve(__dirname, "data.json");

    // Read the file content
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Parse and return the JSON content
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading test_data.json:", error);
    throw error;
  }
}
