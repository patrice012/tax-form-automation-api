import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function getFormsTablistButton({ page }: { page: Page }) {
  const tabListSelector = `.main-content [role='tablist']`;

  const tabList = {
    lastButton: {
      isDisabled: false,
      isHidden: false,
      selector: "",
    },
    currentButton: {
      isDisabled: false,
      isHidden: false,
      selector: "",
    },
  };

  try {
    const tabListLocator = page.locator(tabListSelector).first();

    try {
      // Getting the next button
      const lastButtonLocator = tabListLocator.locator("button").last();
      const id = await lastButtonLocator.getAttribute("id");
      const lastButton = {
        isDisabled: await lastButtonLocator.isDisabled(),
        isHidden: await lastButtonLocator.isHidden(),
        selector: `[id=${id}]`,
      };
      tabList.lastButton = lastButton;
    } catch (error) {
      logger.warn(`Fail to last form tab list`);
    }

    try {
      // Getting the next button
      const currentButtonLocator = tabListLocator
        .locator("button[data-selected]")
        .first();
      const id = await currentButtonLocator.getAttribute("id");
      const currentButton = {
        isDisabled: await currentButtonLocator.isDisabled(),
        isHidden: await currentButtonLocator.isHidden(),
        selector: `[id=${id}]`,
      };
      tabList.currentButton = currentButton;
    } catch (error) {
      logger.warn(`Fail to current form tab list`);
    }

    logger.info("Tablist for forms retrieved successfully.");
    return tabList;
  } catch (error) {
    logger.error(`Error getting forms tablist: ${error}`);
    return tabList;
  }
}
