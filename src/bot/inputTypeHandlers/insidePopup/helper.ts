import { Page } from "playwright";

// Helper to count the number of inputs
export async function getInputNumber({
  page,
  selector,
}: {
  page: Page;
  selector: string;
}) {
  const inputs = await page.locator(selector).locator("input").all();
  return inputs.length;
}
