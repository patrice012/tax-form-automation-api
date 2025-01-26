import { Page } from "playwright";
import logger from "../../utils/logger";

export async function handleExistingTaxReturn({
  page,
}: {
  page: Page;
}): Promise<void> {
  const firstRow = page.locator("[data-testid='protax-datatable-row']").first();
  const button = firstRow.locator("button#viewTaxReturn");

  try {
    await button.click();
    logger.info("Clicked the viewTaxReturn button in the first row.");
  } catch (error) {
    logger.warn("Retrying using page.evaluate");
    await page.evaluate(() => {
      const rows = document.querySelectorAll(
        "[data-testid='protax-datatable-row']"
      );
      if (rows.length > 0) {
        const button = rows[0].querySelector(
          "button#viewTaxReturn"
        ) as HTMLElement;
        if (button) {
          button?.click();
          console.log("Clicked the viewTaxReturn button in the first row.");
        } else {
          console.warn(
            "No button with id 'viewTaxReturn' found in the first row."
          );
        }
      } else {
        console.warn("No rows found with data-testid 'protax-datatable-row'.");
      }
    });
  }
}
