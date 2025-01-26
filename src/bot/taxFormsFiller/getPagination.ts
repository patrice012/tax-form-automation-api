import { Page } from "playwright";
import logger from "../../utils/logger";

export async function getPagination({ page }: { page: Page }) {
  const prevButtonLocator =
    '[data-automation-id="protax-pagination-input-previous"]';
  const nextButtonLocator =
    '[data-automation-id="protax-pagination-input-next"]';
  const currentIndexLocator = ".protax-pagination-input button.active";

  const paginationObj = {
    prevButton: {
      isDisabled: false,
      isHidden: false,
      selector: prevButtonLocator,
    },
    nextButton: {
      isDisabled: false,
      isHidden: false,
      selector: nextButtonLocator,
    },
    currentIndex: {
      selector: currentIndexLocator,
      value: "1",
    },
  };

  try {
    try {
      // Getting the previous button
      const prevLocatorElement = page.locator(prevButtonLocator).first();
      const prevButton = {
        isDisabled: await prevLocatorElement.isDisabled(),
        isHidden: await prevLocatorElement.isHidden(),
        selector: prevButtonLocator,
      };
      paginationObj.prevButton = prevButton;
    } catch (error) {
      logger.warn(`Fail to get pagination previous button data`);
    }

    try {
      // Getting the next button
      const nextLocatorElement = page.locator(nextButtonLocator).first();
      const nextButton = {
        isDisabled: await nextLocatorElement.isDisabled(),
        isHidden: await nextLocatorElement.isHidden(),
        selector: nextButtonLocator,
      };
      paginationObj.nextButton = nextButton;
    } catch (error) {
      logger.warn(`Fail to get pagination next button data`);
    }

    try {
      // Get the current index (active button with the page number)
      const currentIndexLocatorElement = page
        .locator(currentIndexLocator)
        .first();
      const currentIndexText = await currentIndexLocatorElement.textContent();

      const currentIndex = {
        selector: currentIndexLocator,
        value: currentIndexText ? currentIndexText.trim() : "1",
      };
      paginationObj.currentIndex = currentIndex;
    } catch (error) {
      logger.warn(`Fail to get pagination current index value`);
    }

    logger.info("Pagination details retrieved successfully.");
    return paginationObj;
  } catch (error) {
    logger.error(`Error getting pagination: ${error}`);
    return paginationObj;
  }
}
