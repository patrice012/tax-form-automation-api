import logger from "../../../../utils/logger";
import { Page } from "playwright";

export async function displayDetailForm({
  page,
  btnIndex,
}: {
  page: Page;
  btnIndex: number;
}) {
  const stepTitle = "Details";
  try {
    logger.info(`Locating button at index: ${btnIndex}`);

    // Locate all buttons with the span containing the specified text
    const buttons = await page
      .locator(`button:has(span:has-text("${stepTitle}"))`)
      .all();

    if (!buttons || buttons.length === 0) {
      logger.error(`No buttons found with text "${stepTitle}"`);
      return;
    }

    logger.info(`Found ${buttons.length} button(s) with text "${stepTitle}".`);

    // Validate btnIndex
    if (btnIndex < 0 || btnIndex >= buttons.length) {
      logger.error(
        `Invalid btnIndex: ${btnIndex}. Must be between 0 and ${
          buttons.length - 1
        }.`
      );
      return;
    }

    // Select the button at the given index
    const button = buttons[btnIndex];
    logger.info(`Button at index ${btnIndex + 1} selected.`);

    // Wait for the button to be visible
    logger.info(`Waiting for button at index ${btnIndex + 1} to be visible.`);
    try {
      await button.waitFor({ state: "visible", timeout: 15000 });
    } catch (error) {
      logger.info(`Error waiting for element: ${error}`);
    }

    try {
      // Attempt to click the button
      logger.info(`Attempting to click button at index ${btnIndex + 1}.`);
      await button.click();
      logger.info(`Successfully clicked button at index ${btnIndex + 1}.`);
    } catch (clickError) {
      // Fallback: Use evaluate to click the button
      logger.warn(
        `Standard click failed. Attempting to click using evaluate: ${clickError}`
      );

      await page.evaluate((index) => {
        const button = Array.from(document.querySelectorAll("button"))?.[index];
        if (button) {
          button.click();
        } else {
          throw new Error(`Button with index: "${index + 1}" not found`);
        }
      }, btnIndex);

      logger.info(
        `Successfully clicked button at index ${btnIndex + 1} using evaluate.`
      );
    }
  } catch (error) {
    logger.error(
      `Failed to click the button at index ${
        btnIndex + 1
      } with text "${stepTitle}": ${error}`
    );
  }
}
