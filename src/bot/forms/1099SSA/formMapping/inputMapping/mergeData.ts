import { IInput, IInputMapping, InputField, IMergeData } from "./declaration";
import { normalizeText, normalizeXPath } from "./utils";

function processMixedInputs(input: InputField, refData: any): IInput[] {
  return (
    input.fields?.map((field, index) => {
      const fieldValue = refData.value[index];
      const fieldType = Array.isArray(refData.type)
        ? refData.type[index]
        : refData.type;

      return {
        label: normalizeText(field.label),
        ref: normalizeText(input.ref as string),
        inputType: normalizeText(field.inputType),
        xpath: normalizeXPath(field.xpath as string),
        custom: normalizeText(field.custom || ""),
        value: fieldValue,
        status: refData.status,
        type: fieldType,
        notes: refData.notes,
        is_pii: refData.is_pii,
      };
    }) || []
  );
}

function processTableInputs(input: InputField, refData: any[]): IInput[] {
  return (
    input.fields?.map((field) => {
      const typeValues = refData.reduce(
        (acc, data) => {
          const fieldData = data[field.ref as string];
          if (fieldData) {
            acc.value.push(fieldData.value);
            acc.type.push(fieldData.type);
          }
          return acc;
        },
        { value: [], type: [] } as { value: unknown[]; type: string[] }
      );

      return {
        label: normalizeText(field.label),
        ref: normalizeText(input.ref as string),
        inputType: normalizeText(field.inputType),
        xpath: normalizeXPath(field.xpath as string),
        custom: normalizeText(input.custom || ""),
        value: typeValues.value,
        status: "",
        type: typeValues.type,
      };
    }) || []
  );
}

function processStandardInput(input: InputField, refData: any): IInput {
  return {
    label: normalizeText(input?.label),
    ref: normalizeText(input?.ref as string),
    inputType: normalizeText(input?.inputType),
    xpath: normalizeXPath(input?.xpath as string),
    custom: normalizeText(input?.custom || ""),
    value: refData?.value,
    status: refData?.status,
    type: refData?.type,
    notes: refData?.notes,
    is_pii: refData?.is_pii,
  };
}

export function mergeData(
  clientData: IMergeData[],
  inputs: InputField[]
): IInputMapping {
  const data = clientData.map((client) => {
    const mergedInputs: IInput[] = [];

    inputs.forEach((input) => {
      const refData = input.ref ? (client.form_data as any)[input.ref] : null;

      if (refData) {
        if (
          input.inputType === "mixed" &&
          input.fields &&
          Array.isArray(refData.value)
        ) {
          mergedInputs.push(...processMixedInputs(input, refData));
        } else if (
          input.inputType === "table" &&
          input.fields &&
          Array.isArray(refData)
        ) {
          mergedInputs.push(...processTableInputs(input, refData));
        } else {
          mergedInputs.push(processStandardInput(input, refData));
        }
      }
    });

    return {
      inputs: mergedInputs,
    };
  });

  return data?.at(0) as IInputMapping;
}
