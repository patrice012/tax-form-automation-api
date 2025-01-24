export interface IMergeData {
  form_name: string;
  form_data: unknown;
}

export interface InputField {
  label: string;
  inputType: string;
  xpath?: string;
  ref?: string;
  custom?: string;
  fields?: InputField[];
  expectValue?: any;
}

export interface IInput {
  label: string;
  ref: string;
  custom?: string;
  inputType: string;
  xpath: string;
  id?: string;
  dataTestId?: string;
  inputIndex?: number;
  value: any;
  status?: string;
  type: string | string[];
  notes?: any[];
  is_pii?: boolean;
}

export interface IInputMapping {
  inputs: IInput[];
}

export type Tfield = {
  label: string;
  inputType: string;
  xpath?: string;
  ref?: string;
  custom?: string;
  fields?: {
    label: string;
    inputType: string;
    xpath: string;
  };
};
