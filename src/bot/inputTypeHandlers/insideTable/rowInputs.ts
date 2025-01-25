import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function getTotalInputs(
  page: Page,
  mainSelector: string
): Promise<number> {
  logger.info("Getting total inputs in table");
  const totalInputs = await page.evaluate((selector) => {
    const container = document.querySelector(selector);
    return container ? container.querySelectorAll("td input").length : 0;
  }, mainSelector);
  logger.info(`Total inputs in table: ${totalInputs}`);
  return totalInputs;
}

async function rowsWithInput(
  page: Page,
  mainSelector: string
): Promise<string[]> {
  // Return an array of row selectors instead of DOM elements
  const rowsWithInputs = await page.evaluate((selector) => {
    const container = document.querySelector(selector);
    if (!container) return [];

    // Find rows (`<tr>`) that contain at least one `<input>` inside them
    return Array.from(container.querySelectorAll("tr"))
      .filter((row) => row.querySelector("input") !== null)
      .map((row) => row.outerHTML);
  }, mainSelector);
  return rowsWithInputs;
}

export async function getTotalRowsWithInputs(
  page: Page,
  mainSelector: string
): Promise<number> {
  logger.info("Getting total rows with inputs");
  const rows = await rowsWithInput(page, mainSelector);
  const count = rows.length;
  logger.info(`Total rows with inputs: ${count}`);
  return count;
}

export async function getTotalInputsByRow(
  page: Page,
  mainSelector: string
): Promise<number> {
  logger.info("Get total inputs by row");

  // Evaluate logic directly in the browser's context
  const totalInputs = await page.evaluate((selector) => {
    const container = document.querySelector(selector);
    if (!container) return 0;

    // Find the first row containing inputs and count its inputs
    const firstRow = Array.from(container.querySelectorAll("tr")).find((row) =>
      row.querySelector("input")
    );
    return firstRow ? Array.from(firstRow.querySelectorAll("input")).length : 0;
  }, mainSelector);

  logger.info(`Total inputs in the first row: ${totalInputs}`);
  return totalInputs;
}
