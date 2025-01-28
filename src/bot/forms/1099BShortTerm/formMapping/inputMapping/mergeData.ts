import { IInput, IInputMapping, InputField, IMergeData } from "../declaration";
import { normalizeText, normalizeXPath } from "./utils";

function processMixedInputs(input: InputField, refData: any): IInput[] {
  return (
    input.fields?.map((field, index) => {
      const fieldValue = refData.value[index];
      const fieldType = Array.isArray(refData.type)
        ? refData.type[index]
        : refData.type;

      return {
        ...field,
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
        ...field,
        label: normalizeText(field.label),
        ref: normalizeText(input.ref as string),
        inputType: normalizeText(field.inputType),
        xpath: normalizeXPath(field.xpath as string),
        custom: normalizeText(input.custom || ""),
        value: typeValues?.value,
        status: "",
        type: typeValues.type,
      };
    }) || []
  );
}

function processSpecialInput(input: InputField, refData: any): IInput | null {
  let expectValue = input?.expectValue;

  // Check if expectValue is a primitive
  const isPrimitive = (value: any): boolean =>
    value === null ||
    ["string", "number", "boolean", "undefined"].includes(typeof value);

  if (!isPrimitive(expectValue)) {
    console.error(
      `Error: Unsupported data type "${typeof expectValue}" for input:`,
      input
    );
    // Skip processing for non-primitive values
    return null;
  }

  // Map fieldType to expected value
  const fieldType =
    typeof expectValue === "string"
      ? "text"
      : typeof expectValue === "boolean"
      ? "checkbox"
      : typeof expectValue;

  // Map boolean value to number if expected
  // Reset the expectValue if provided value is false (don't need this input)
  // If input value === (null, undefined), form filler will skip it
  if (
    refData?.type === "bool" ||
    refData?.value === true ||
    refData?.value === false
  ) {
    expectValue = refData.value ? expectValue : null;
  }
  return {
    ...input,
    label: normalizeText(input?.label),
    ref: normalizeText(input?.ref as string),
    inputType: normalizeText(fieldType),
    xpath: normalizeXPath(input?.xpath as string),
    custom: normalizeText(input?.custom || ""),
    value: expectValue,
    status: refData?.status,
    type: refData?.type,
    notes: refData?.notes,
    is_pii: refData?.is_pii,
  };
}

function processStandardInput(input: InputField, refData: any): IInput {
  // special field => basis_is_reported_to_irs
  let expectValue = refData?.value;
  if (input.ref === "basis_is_reported_to_irs") {
    expectValue =
      refData?.value === true ? null : refData.value === false ? 1 : null;
  }

  return {
    ...input,
    label: normalizeText(input?.label),
    ref: normalizeText(input?.ref as string),
    inputType: normalizeText(input?.inputType),
    xpath: normalizeXPath(input?.xpath as string),
    custom: normalizeText(input?.custom || ""),
    value: expectValue,
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
        } else if (input.inputType === "special" && input.expectValue) {
          const inputData = processSpecialInput(input, refData);
          if (inputData) {
            mergedInputs.push(inputData);
          }
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
