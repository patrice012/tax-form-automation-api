import logger from '@/utils/logger';
import { mergeData } from './mergeData';
import { cleanUpInputMapping } from './utils';
import { IInput } from '../declaration';
import { getEntryPointInputFields } from '../inputFields/entryPoint';
import { get4684InputFields } from '../inputFields/4684';
import { getGeneralInformationInputFields } from '../inputFields/generalInformation';
import { getLessCommonScenariosInputFields } from '../inputFields/lessCommonScenarios';
import { getSaleOfAssetInputFields } from '../inputFields/saleOfAsset';
import { getSaleOfHomeInputFields } from '../inputFields/saleOfHome';
import { getScheduleDInputFields } from '../inputFields/scheduleD';

type InputFieldsFetcher = () => any;
type InputMappingResult = {
  formId: string;
  inputs: IInput[];
};

export async function getInputMapping({
  data,
  formId,
  fetchInputFields,
}: {
  data: any;
  formId: string;
  fetchInputFields: InputFieldsFetcher;
}): Promise<InputMappingResult> {
  try {
    const inputFields = fetchInputFields() as IInput[];
    const clientData = Array.isArray(data) ? data : [data];

    const inputMapping = mergeData(clientData, inputFields);

    const cleanInputMapping = {
      formId,
      inputs: cleanUpInputMapping(inputMapping).inputs || [],
    };

    return cleanInputMapping;
  } catch (error) {
    logger.error(`Failed to get formId:${formId} input mapping: ${error}`);
    return {
      formId,
      inputs: [],
    };
  }
}

export async function getEntryPointInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'quick_entry',
    fetchInputFields: getEntryPointInputFields,
  });
}

export async function getGeneralInformationInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'general_information',
    fetchInputFields: getGeneralInformationInputFields,
  });
}

export async function get4684InputMapping(data: any) {
  return getInputMapping({
    data,
    formId: '4684',
    fetchInputFields: get4684InputFields,
  });
}

export async function getLessCommonScenariosInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'less_common_scenarios',
    fetchInputFields: getLessCommonScenariosInputFields,
  });
}

export async function getSaleOfAssetInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'sale_of_asset',
    fetchInputFields: getSaleOfAssetInputFields,
  });
}

export async function getSaleOfHomeInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'sale_of_home',
    fetchInputFields: getSaleOfHomeInputFields,
  });
}

export async function getScheduleDInputMapping(data: any) {
  return getInputMapping({
    data,
    formId: 'schedule_d',
    fetchInputFields: getScheduleDInputFields,
  });
}
