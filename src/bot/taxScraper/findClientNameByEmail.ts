import { Page, Locator } from "playwright";

export async function findClientNameByEmail({
  page,
  emailToFind,
}: {
  page: Page;
  emailToFind: string;
}): Promise<Locator | null> {
  const rows = await page.locator('[data-testid="protax-datatable-row"]').all();
  for (const row of rows) {
    const emailElement = await row.locator(
      '[data-automation-id="CLIENT_EMAIL_LINK"]'
    );
    if (emailElement) {
      const email = await emailElement.textContent();
      if (email?.trim().includes(emailToFind)) {
        return row.locator('[data-automation-id="CLIENT_NAME_LINK"]');
      }
    }
  }
  return null;
}
