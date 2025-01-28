import { Page } from 'playwright';
import { navigateToCorrectForm } from '../../navigateToCorrectForm';
import { navigateToStep } from './navigateToStep';

export function getStepFormSections() {
  const stepForms = [
    {
      title: 'Quick Entry',
      identifier: 'quick_entry',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:quick_entry`);
        await navigateToCorrectForm({ page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:quick_entry ${page}`);
      },
      step: 1,
      formType: 'LongTerm',
    },
    {
      title: 'General Information',
      identifier: 'general_information',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(
          `Initializing step for form section:general_information ${page}`,
        );
        // await navigateToStep({ stepTitle: "General Information", page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(
          `Cleaning up step for form section:general_information ${page}`,
        );
      },
      step: 2,
      formType: 'LongTerm',
    },
    {
      title: 'Schedule D',
      identifier: 'schedule_d',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:schedule_d`);
        await navigateToStep({ stepTitle: 'Schedule D', page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:schedule_d ${page}`);
      },
      step: 3,
      formType: 'LongTerm',
    },
    {
      title: 'Sale of Asset 4797, 6252',
      identifier: 'sale_of_asset',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:sale_of_asset`);
        await navigateToStep({ stepTitle: 'Sale of Asset 4797, 6252', page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:sale_of_asset ${page}`);
      },
      step: 4,
      formType: 'LongTerm',
    },
    {
      title: '4684, 6781, 8824, 4255',
      identifier: '4684',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:4684`);
        await navigateToStep({ stepTitle: '4684, 6781, 8824, 4255', page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:4684 ${page}`);
      },
      step: 5,
      formType: 'LongTerm',
    },
    {
      title: 'Sale of Home',
      identifier: 'sale_of_home',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:sale_of_home`);
        await navigateToStep({ stepTitle: 'Sale of Home', page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:sale_of_home ${page}`);
      },
      step: 6,
      formType: 'LongTerm',
    },
    {
      title: 'Less Common Scenarios',
      identifier: 'less_common_scenarios',
      initializeStep: async ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:less_common_scenarios`);
        await navigateToStep({ stepTitle: 'Less Common Scenarios', page });
      },
      cleanupStep: async ({ page }: { page: Page }) => {
        console.log(
          `Cleaning up step for form section:less_common_scenarios ${page}`,
        );
      },
      step: 7,
      formType: 'LongTerm',
    },
  ];
  return stepForms;
}
