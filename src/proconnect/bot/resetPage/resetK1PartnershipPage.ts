import { Page } from 'playwright';
import { navigateToSubPage } from '../addNewForm/navigateToSubPage';

export async function resetK1PartnershipPage({
    page,
}: {
    page: Page;
}): Promise<void> {
    await navigateToSubPage({
        page,
        stepTitle: "Info",
    });
}
