import { Page } from "playwright";
import logger from "@/utils/logger";

export async function navigateToStep({
  page,
  stepTitle,
}: {
  page: Page;
  stepTitle: string;
}) {
  try {
    // Locate the button containing the specified text
    const buttonLocator = page
      .locator(`button:has(span), button`)
      .filter({ hasText: stepTitle })
      .first();

    const id = await buttonLocator.getAttribute("id");
    const dataTestId = await buttonLocator.getAttribute("data-testid");

    // Wait for the button to become visible
    logger.info(
      `Waiting for button:has-text("${stepTitle}") to become visible.`
    );

    try {
      await buttonLocator.waitFor({ state: "visible", timeout: 7000 });
    } catch (error) {
      logger.info(`Error waiting for button to become visible: ${error}`);
    }

    try {
      // Attempt to click the button normally
      logger.info(`Clicking button:has-text("${stepTitle}")`);
      await buttonLocator.click({ timeout: 7000 });

      logger.info(`Successfully clicked button:has-text("${stepTitle}")`);
    } catch (clickError) {
      logger.warn(
        `Standard click failed for button:has-text("${stepTitle}"). Attempting alternative click: ${clickError}`
      );

      // Fallback to evaluate and click using raw JavaScript
      await page.evaluate((buttonText) => {
        const button = Array.from(document.querySelectorAll("button")).find(
          (btn) => btn.textContent?.includes(buttonText)
        );
        if (button) {
          button.click();
        } else {
          throw new Error(`Button with text "${buttonText}" not found`);
        }
      }, stepTitle);

      logger.info(
        `Successfully clicked button:has-text("${stepTitle}") using fallback method.`
      );
    }

    // **Check if the button is still present after clicking**
    await page.waitForTimeout(1000);

    const isStillPresent = await page.evaluate((buttonText) => {
      return Array.from(document.querySelectorAll("button")).some((btn) =>
        btn.textContent?.includes(buttonText)
      );
    }, stepTitle);

    if (isStillPresent) {
      logger.warn(
        `Button "${stepTitle}" is still present. Clicking again using DOM API.`
      );

      await page.evaluate(
        ({ id, dataTestId }) => {
          let button;
          if (id) {
            button = document.getElementById(id);
          } else if (dataTestId) {
            button = document.querySelector(`[data-testid="${dataTestId}"]`);
          }

          if (button) {
            (button as HTMLButtonElement).click();
          }
        },
        { id, dataTestId }
      );

      logger.info(`Successfully clicked button "${stepTitle}" using DOM API.`);
    }
  } catch (error) {
    logger.error(`Failed to navigate to step "${stepTitle}": ${error}`);
  }
}
