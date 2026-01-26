import { Page } from 'playwright';
import logger from '@/utils/logger';
import { Attribute } from '@/utils/types';

export async function checkboxInput({
  page,
  input,
  mainParentSelector,
}: {
  page: Page;
  input: Attribute;
  mainParentSelector?: string;
}): Promise<void> {
  const { xpath, value, label, id, dataTestId, inputIndex } = input;
  try {
    logger.info(
      `Handling checkbox for: ${label} with desired state: ${value.toString()}`,
    );

    try {
      // Wait for element to be visible and enabled
      logger.info('Waiting for element to be visible and enabled...');
      const labelLocator = page.locator(`:has-text(${label})`).first();
      await labelLocator.waitFor({
        state: 'visible',
        timeout: 30000,
      });
    } catch (error) {
      logger.warn(`Label: ${label} not visible, ${error}`);
    }

    // Convert desired state to boolean
    const desiredState = value.toString().toLowerCase() === 'true';

    // Fallback using page.evaluate
    const result = await page.evaluate(
      ({
        xpath,
        desiredState,
        id,
        dataTestId,
        inputIndex,
        mainParentSelector,
      }) => {
        let checkbox: HTMLInputElement | null = null;
        
        if (id) {
          checkbox = document.querySelector(`#${id}`) as HTMLInputElement;
        } else if (dataTestId && !checkbox) {
          checkbox = document.querySelector(
            `[data-testid="${dataTestId}"]`,
          ) as HTMLInputElement;
        } else if (xpath && !checkbox) {
          checkbox = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
          ).singleNodeValue as HTMLInputElement;
        } else if (!checkbox && inputIndex && mainParentSelector) {
          try {
            checkbox = Array.from(
              document
                ?.querySelector(mainParentSelector)
                ?.querySelectorAll('input') || [],
            )?.at(inputIndex) as HTMLInputElement;
          } catch (error) {
            console.log('Index base query fail', { error });
          }
        }

        if (!checkbox) {
          return { success: false, error: 'Checkbox not found' };
        }

        const currentState = checkbox.checked;
        if (currentState === desiredState) {
          return { success: true, checked: checkbox.checked };
        }

        try {
          checkbox.click();
          checkbox.checked = desiredState;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));

          return { success: true, checked: checkbox.checked };
        } catch (e) {
          return {
            success: false,
            error: e instanceof Error ? e.message : 'Unknown error',
          };
        }
      },
      { xpath, desiredState, id, dataTestId, inputIndex, mainParentSelector },
    );

    if (!result.success) {
      logger.error(`Fallback failed for checkbox ${label}: ${result.error}`);
    } else {
      logger.info(
        `Successfully changed checkbox state for ${label} using fallback.`,
      );
    }
  } catch (error) {
    logger.error(
      `Failed to handle checkbox ${label} due to unexpected error.`,
      error,
    );
  }
}
