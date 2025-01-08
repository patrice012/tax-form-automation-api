import { Page } from "playwright";
import logger from "../../utils/logger";
import { getClientInformation } from "./getClientInformation";

export async function handleNewTaxReturn(page: Page): Promise<any> {
  try {
    // Create tax return
    const createButton = page
      .locator("[class='client-profile-zero-state']")
      .locator("button[type='button']");
    const secondBtn = page.locator("[class='create-tax-return-btn']");

    await page.waitForTimeout(500);

    if (await secondBtn.isVisible()) {
      logger.info("Using secondary create button");
      await secondBtn.click();
    } else if (await createButton.isVisible()) {
      logger.info("Using primary create button");
      await createButton.click();
    }

    // Select appropriate tax year
    const { taxYear } = await getClientInformation();

    const locator = page
      .locator("[data-automation-id='select-return-year']")
      .first();
    logger.info(`Attempting to select option taxYear with value: ${taxYear}`);

    try {
      try {
        // Wait for element to be visible
        logger.info("Waiting for select element to be visible...");
        await locator.waitFor({
          state: "visible",
          timeout: 15000,
        });
      } catch (error) {
        logger.warn(`Failed to wait for element`);
      }

      // Get all available options
      const options = await locator.evaluate((select: HTMLSelectElement) => {
        return Array.from(select.options).map((option) => ({
          value: option.value,
          text: option.text,
        }));
      });

      logger.info("Available options:", options);

      // Find the matching option that starts with our value
      const matchingOption = options.find(
        (opt) =>
          opt.value.startsWith(taxYear.toString()) ||
          opt.text.startsWith(taxYear.toString())
      );

      if (!matchingOption) {
        logger.error(`No option found starting with: ${taxYear}`);
      }

      // Select the matching option using its full value
      await locator.selectOption(matchingOption?.value as string);
      logger.info(
        `Selected option with value: ${matchingOption?.value as string}`
      );

      // Verify the selection
      const selectedValue = await locator.evaluate(
        (select: HTMLSelectElement) => select.value
      );
      if (!selectedValue.startsWith(taxYear.toString())) {
        logger.error(
          `Selection verification failed. Expected to start with: ${taxYear}, Got: ${selectedValue}`
        );
      }
    } catch (error) {
      logger.error(`Error selecting tax year: ${error}`);
    }

    // Handle Next button
    const nextButton = page.locator("[data-testid='save-tax-return-button']");
    if ((await nextButton.isVisible()) && !(await nextButton.isDisabled())) {
      logger.info("Next button is visible and not disable");
    } else {
      logger.warn("Next button not found.");
    }
    await nextButton?.click();
  } catch (error) {
    logger.error("Error handling 'Next' button:", error);
    return { page, success: false };
  }
}
