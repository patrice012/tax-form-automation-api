import { Page } from 'playwright';
import { Attribute } from '@/utils/types';

export async function selectRadioButton({
  page,
  input,
  mainParentSelector,
}: {
  page: Page;
  input: Attribute;
  mainParentSelector?: string;
}): Promise<void> {
  const { xpath, id, dataTestId, inputIndex } = input;
  let locator;

  if (id) {
    locator = page.locator(`#${id}`);
  } else if (dataTestId) {
    locator = page.locator(`[data-testid="${dataTestId}"]`);
  } else if (xpath) {
    locator = page.locator(`xpath=${xpath}`);
  } else if (inputIndex !== undefined && mainParentSelector) {
    locator = page
      .locator(mainParentSelector)
      .locator('input[type="radio"]')
      .nth(inputIndex);
  } else {
    throw new Error('selectRadioButton: No valid selector provided.');
  }

  await locator.waitFor({ state: 'visible', timeout: 5000 });

  const result = await page.evaluate((id) => {
    const element = document.querySelector(`#${id}`) as HTMLInputElement | null;
    if (!element) {
      return { success: false };
    }
    element.click();
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    return { success: true, checked: element.checked };
  }, id);

  await page.waitForTimeout(500);

  const isChecked = await locator.isChecked();
  if (!isChecked) {
    throw new Error('selectRadioButton: Radio button is not checked after evaluate click.');
  }
}
