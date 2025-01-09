import logger from "../../utils/logger";
import { fillEmail } from "../auth/fillEmail";
import { fillPassword } from "../auth/fillPassword";
import { IAccount } from "../auth/declaration";
import { loadAuthPage } from "./loadAuthPage";

export async function authProcess({ email, password }: IAccount) {
  const { page, playwrightService } = await loadAuthPage();
  try {
    await fillEmail({ page, email });
    await fillPassword({ page, password });

    return { page, playwrightService };
  } catch (error) {
    logger.error("Login error:", error);
    throw error;
  }
}
