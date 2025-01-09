import { Page } from "playwright";
import { displayDetailForm } from "../../displayDetailForm";
import { navigateToStep } from "./navigateToStep";

export function getStepFormSections() {
  const stepForms = [
    {
      title: "Quick Entry",
      identifier: "quick_entry",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:quick_entry`);
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:quick_entry`);
        displayDetailForm({ page });
      },
      step: 1,
      formType: "ShortTerm",
    },
    {
      title: "General Information",
      identifier: "general_information",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:general_information`);
        navigateToStep({ stepTitle: "General Information", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:general_information`);
      },
      step: 2,
      formType: "ShortTerm",
    },
    {
      title: "Schedule D",
      identifier: "schedule_d",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:schedule_d`);
        navigateToStep({ stepTitle: "Schedule D", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:schedule_d`);
      },
      step: 3,
      formType: "ShortTerm",
    },
    {
      title: "Sale of Asset 4797, 6252",
      identifier: "sale_of_asset",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:sale_of_asset`);
        navigateToStep({ stepTitle: "Sale of Asset 4797, 6252", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:sale_of_asset`);
      },
      step: 4,
      formType: "ShortTerm",
    },
    {
      title: "4684, 6781, 8824, 4255",
      identifier: "4684",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:4684`);
        navigateToStep({ stepTitle: "4684, 6781, 8824, 4255", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:4684`);
      },
      step: 5,
      formType: "ShortTerm",
    },
    {
      title: "Sale of Home",
      identifier: "sale_of_home",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:sale_of_home`);
        navigateToStep({ stepTitle: "Sale of Home", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:sale_of_home`);
      },
      step: 6,
      formType: "ShortTerm",
    },
    {
      title: "Less Common Scenarios",
      identifier: "less_common_scenarios",
      initializeStep: ({ page }: { page: Page }) => {
        console.log(`Initializing step for form section:less_common_scenarios`);
        navigateToStep({ stepTitle: "Less Common Scenarios", page });
      },
      cleanupStep: ({ page }: { page: Page }) => {
        console.log(`Cleaning up step for form section:less_common_scenarios`);
      },
      step: 7,
      formType: "ShortTerm",
    },
  ];
  return stepForms;
}
