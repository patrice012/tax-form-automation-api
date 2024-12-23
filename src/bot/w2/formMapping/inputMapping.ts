import logger from "../../../utils/logger";
import { getFormData } from "./getData";
import { getInputFields } from "./w2input";

interface IClientData {
  targetClient: {
    email: string;
  };
  W2: Record<string, any>;
}

interface InputField {
  label: string;
  inputType: string;
  xpath?: string;
  ref?: string;
  fields?: InputField[];
}

export interface IInput {
  label: string;
  ref: string;
  inputType: string;
  xpath: string;
  value: any;
  status: string;
  type: string | string[];
  notes: any[];
  is_pii: boolean;
}

export interface IInputMapping {
  targetClient: {
    email: string;
  };
  inputs: IInput[];
}

function mergeData(
  IClientData: IClientData[],
  inputs: InputField[]
): IInputMapping {
  const data = IClientData.map((data) => {
    const mergedInputs: IInput[] = [];

    inputs.forEach((input) => {
      const refData = input.ref ? data.W2[input.ref] : null;

      if (refData) {
        if (
          input.inputType === "mixed" &&
          input.fields &&
          Array.isArray(refData.value)
        ) {
          // Handle mixed input types
          input.fields.forEach((field, index) => {
            const fieldValue = refData.value[index];
            const fieldType = Array.isArray(refData.type)
              ? refData.type[index]
              : refData.type;

            mergedInputs.push({
              label: normalizeText(field.label),
              ref: normalizeText(input.ref as string),
              inputType: normalizeText(field.inputType),
              xpath: normalizeXPath(field.xpath as string),
              value: fieldValue,
              status: refData.status,
              type: fieldType,
              notes: refData.notes,
              is_pii: refData.is_pii,
            });
          });
        } else {
          // Handle standard input types
          mergedInputs.push({
            label: normalizeText(input.label),
            ref: normalizeText(input.ref as string),
            inputType: normalizeText(input.inputType),
            xpath: normalizeXPath(input.xpath as string),
            value: refData.value,
            status: refData.status,
            type: refData.type,
            notes: refData.notes,
            is_pii: refData.is_pii,
          });
        }
      }
    });

    return {
      targetClient: data.targetClient,
      inputs: mergedInputs,
    };
  });

  return data[0];
}

function normalizeXPath(xpath: string): string {
  // Remove unnecessary prefixes like `//` at the start
  if (xpath.trim().startsWith("//")) {
    xpath = xpath.replace(/^\/\//, "/html/");
  }

  // Remove redundant `[1]` indexes, as they are implicit
  xpath = xpath.replace(/\[1\]/g, "");

  // Collapse multiple slashes into a single slash
  xpath = xpath.replace(/\/+/g, "/");

  // Remove trailing slashes if any
  xpath = xpath.replace(/\/$/, "");

  return xpath;
}

function normalizeText(text: string): string {
  return text.trim();
}

function cleanUpInputMapping(mergeObj: IInputMapping) {
  const inputs = mergeObj.inputs;
  const validInput = inputs.filter((input) => {
    if (input && input?.value != null && input?.value != undefined) {
      return input;
    }
  });

  const newObj = {
    ...mergeObj,
    inputs: validInput,
  };

  return newObj;
}

export async function getInputMapping() {
  try {
    const formData = await getFormData();
    const inputFields = getInputFields();
    const IInputMapping = mergeData(formData, inputFields);
    return cleanUpInputMapping(IInputMapping);
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return [];
  }
}

// getInputMapping()
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
