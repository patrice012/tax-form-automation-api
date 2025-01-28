import { IInputMapping } from "../declaration";

export function normalizeText(text: string): string {
  return text?.trim() || "";
}

export function cleanUpInputMapping(mergeObj: IInputMapping) {
  const inputs = mergeObj?.inputs;
  const validInput = inputs?.filter((input) => {
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
