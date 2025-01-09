import { Page } from "playwright";
import logger from "../../../utils/logger";
import { getInputNumber } from "./helper";

// Helper to fill inputs dynamically
export async function fillInputs({
  page,
  value,
  popupSelector,
  numberOfInputs,
  requiredInputs,
}: {
  page: Page;
  value: (string | number)[][];
  popupSelector: string;
  numberOfInputs: number;
  requiredInputs: number;
}) {
  // Flatten the input values into a single array
  const flatValues = value.flat();
  logger.info(`Flattened values: ${flatValues}`);

  let inputIndex = 0;

  // Function to generate a random valid index
  function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // Ensure we process at least the required number of inputs
  while (inputIndex < requiredInputs) {
    // Fill available inputs
    for (
      ;
      inputIndex < numberOfInputs &&
      inputIndex < requiredInputs &&
      inputIndex < flatValues.length;
      inputIndex++
    ) {
      const input = page
        .locator(popupSelector)
        .locator("input")
        .nth(inputIndex);
      logger.info(
        `Filling input ${inputIndex + 1} with value: ${flatValues[inputIndex]}`
      );
      try {
        await input.clear();
        logger.info("Clear input value");
      } catch (error) {
        logger.warn("Failed to clear input");
      }
      await input.fill(flatValues[inputIndex].toString());
    }

    // If more inputs are needed, press Enter on a random input
    if (numberOfInputs < requiredInputs) {
      const randomIndex = getRandomIndex(numberOfInputs);
      const randomInput = page
        .locator(popupSelector)
        .locator("input")
        .nth(randomIndex);
      logger.info(
        `Pressing Enter on a random input (index: ${randomIndex})...`
      );
      await randomInput.press("Enter");
      await page.waitForTimeout(1500);

      // Update the number of inputs
      numberOfInputs = await getInputNumber({ page, selector: popupSelector });
      logger.info(`Updated number of inputs: ${numberOfInputs}`);
    } else {
      // If no more inputs are needed, exit the loop
      break;
    }
  }
  logger.info("Filled inputs");
}
