import { IInputMapping } from "@/bot/forms/declaration";

export function mergeSpecialFields(mergeObj: IInputMapping) {
  const inputs = mergeObj.inputs;
  const validInput = inputs.map((input) => {
    let value = input?.value;
    let newType = input?.type;

    if (
      input.ref === "payers_state_number" ||
      input.ref === "state_tax_withheld" ||
      input.ref === "state"
    ) {
      value = Array.isArray(input?.value) ? input?.value?.at(0) : input?.value;

      newType = Array.isArray(input?.type)
        ? (input?.type?.at(0) as string)
        : input?.type;
    }

    return {
      ...input,
      value,
      type: newType,
    };
  });
  return {
    inputs: validInput,
  };
}
