import { IInput, IInputMapping, InputField, IClientData } from "./declaration";
import { normalizeText, normalizeXPath } from "./utils";

export function mergeData(
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
              custom: normalizeText(field.custom || ""),
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
            custom: normalizeText(input.custom || ""),
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
