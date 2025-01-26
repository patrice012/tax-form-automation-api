import { Page, Locator } from "playwright";
import { getPagination } from "./getPagination";
import logger from "../../utils/logger";

export async function findClientNameByEmail({
  page,
  emailToFind,
}: {
  page: Page;
  emailToFind: string;
}): Promise<Locator | null> {
  try {
    // Get initial pagination information
    logger.info("Fetching initial pagination state...");
    let paginationObj = await getPagination({ page });
    let { prevButton, nextButton, currentIndex } = paginationObj;

    if (!prevButton || !nextButton) {
      logger.warn("Pagination buttons are not found.");
    }

    logger.info(
      `Initial pagination state: Current Page = ${currentIndex?.value}, Prev Button = ${prevButton?.selector}, Next Button = ${nextButton?.selector}`
    );

    // Navigate to the first page if not already there
    if (currentIndex?.value && Number(currentIndex.value) > 1) {
      logger.info(`Navigating back to the first page...`);

      while (currentIndex?.value && Number(currentIndex.value) > 1) {
        logger.info(`Current page index: ${currentIndex.value}`);

        if (prevButton?.selector) {
          await page.locator(prevButton.selector).click();
          logger.info(`Clicked on the Previous button.`);
          paginationObj = await getPagination({ page });
          prevButton = paginationObj.prevButton;
          nextButton = paginationObj.nextButton;
          currentIndex = paginationObj.currentIndex;
        } else {
          logger.warn("Previous button selector is not available.");
          break;
        }
      }
      logger.info(
        `Reached the first page: Current Page = ${currentIndex?.value}`
      );
    }

    // Start searching for the client email on the current and subsequent pages
    let matchingElement: Locator | null = null;
    do {
      logger.info(
        `Searching for email "${emailToFind}" on page ${currentIndex?.value}...`
      );
      const rows = await page
        .locator('[data-testid="protax-datatable-row"]')
        .all();
      logger.info(`Found ${rows.length} rows on the current page.`);

      for (const [index, row] of rows.entries()) {
        logger.info(`Checking row ${index + 1} for the email...`);
        const emailElement = row.locator(
          '[data-automation-id="CLIENT_EMAIL_LINK"]'
        );
        if (emailElement) {
          const email = await emailElement.textContent();
          logger.info(`Row ${index + 1} email: ${email?.trim()}`);
          if (email?.trim().includes(emailToFind)) {
            logger.info(
              `Email "${emailToFind}" found in row ${
                index + 1
              }. Retrieving client name...`
            );
            matchingElement = row.locator(
              '[data-automation-id="CLIENT_NAME_LINK"]'
            );
            break;
          }
        }
      }

      const handleNextPage = !matchingElement && !nextButton?.isDisabled;
      if (handleNextPage && nextButton?.selector) {
        logger.info(
          `Email not found on page ${currentIndex?.value}. Navigating to the next page...`
        );
        await page.locator(nextButton.selector).click();
        paginationObj = await getPagination({ page });
        prevButton = paginationObj.prevButton;
        nextButton = paginationObj.nextButton;
        currentIndex = paginationObj.currentIndex;
      } else if (!matchingElement) {
        logger.info(
          `Email not found, and no more pages to navigate. Search terminated.`
        );
        break;
      }
    } while (!matchingElement);

    if (matchingElement) {
      logger.info(`Client name found for email "${emailToFind}".`);
    } else {
      logger.warn(`Client name not found for email "${emailToFind}".`);
    }

    return matchingElement;
  } catch (error) {
    logger.error(`Error occurred in findClientNameByEmail: ${error}`);
    return null;
  }
}
