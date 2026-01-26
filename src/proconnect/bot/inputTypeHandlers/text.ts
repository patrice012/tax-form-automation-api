import { Page } from 'playwright';
import logger from '@/utils/logger';
import { Attribute } from '@/utils/types';

export async function fillTextInput({
  page,
  input,
  mainParentSelector,
}: {
  page: Page;
  input: Attribute;
  mainParentSelector?: string;
}): Promise<void> {
  const { xpath, value, label, id, dataTestId, inputIndex } = input;

  // Determine the best selector to use
  let locator;
  
  if (id) {
    locator = page.locator(`#${id}`).first();
  } else if (dataTestId) {
    locator = page.locator(`[data-testid="${dataTestId}"]`).first();
  } else if (inputIndex && mainParentSelector) {
    locator = page.locator(mainParentSelector).locator('input').nth(inputIndex);
  } else if (xpath) {
    locator = page.locator(`xpath=${xpath}`).first();
  } else {
    throw new Error('No valid selector provided to locate the input.');
  }

  try {
    // Wait for element to be visible
    await locator.waitFor({ state: 'visible', timeout: 1000 });
  } catch {
    logger.warn(`Input is not visible`);
  }

  if (!locator) {
    logger.error(
      `No valid selector found for ${label}. Falling back to DOM API.`,
    );
  }

  try {
    if (locator) {
      await locator.focus({ timeout: 500 });
      await locator.clear({ timeout: 500 });
      await locator.fill(value.toString());

      const actualValue = await locator.inputValue();
      return;
    }
  } catch (error) {
    logger.error(`Standard input interaction failed for ${label}:`);
  }

  // Fallback: Use DOM API to interact directly with the element
  try {
    logger.info('Attempting fallback method using evaluate...');

    const result = await page.evaluate(
      ({ id, dataTestId, xpath, value, inputIndex, mainParentSelector }) => {
        let element: HTMLInputElement | null = null;

        if (!element && xpath) {
          console.log(`Trying with XPath: ${xpath}`);
          element = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
          ).singleNodeValue as HTMLInputElement;
        }

        if (id) {
          console.log(`Trying with ID: ${id}`);
          element = document.querySelector(`#${id}`) as HTMLInputElement;
        }

        if (!element && dataTestId) {
          console.log(`Trying with data-testid: ${dataTestId}`);
          element = document.querySelector(
            `[data-testid="${dataTestId}"]`,
          ) as HTMLInputElement;
        }

        if (!element && inputIndex && mainParentSelector) {
          try {
            element = Array.from(
              document
                ?.querySelector(mainParentSelector)
                ?.querySelectorAll('input') || [],
            )?.at(inputIndex) as HTMLInputElement;
          } catch (error) {
            console.log('Index base query fail', { error });
          }
        }

        if (!element) {
          return { success: false, error: 'Element not found' };
        }

        try {
          // Focus the element
          element.focus();
          // Clear existing value
          element.value = '';
          // Set new value
          element.value = value.toString();
          // Dispatch events
          element.dispatchEvent(new Event('input', { bubbles: true }));
          element.dispatchEvent(new Event('change', { bubbles: true }));

          return { success: true, value: element.value };
        } catch (error) {
          return { success: false, error: (error as Error).message };
        }
      },
      { id, dataTestId, xpath, value, inputIndex, mainParentSelector },
    );

    if (!result.success) {
      throw new Error(`Fallback method failed: ${result.error}`);
    }

    logger.info(
      `Successfully filled input using fallback method: ${value} for ${label}`,
    );
  } catch (fallbackError) {
    logger.error(
      `All attempts to fill input for ${label} failed. Please check element accessibility and page state.`,
      fallbackError,
    );
  }
}
