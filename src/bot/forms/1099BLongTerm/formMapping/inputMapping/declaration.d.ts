export interface IClientData {
  targetClient: {
    email: string;
  };
  W2: Record<string, any>;
}

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
  value: any;
  status?: string;
  type: string | string[];
  notes?: any[];
  is_pii?: boolean;
}

export interface IInputMapping {
  inputs: IInput[];
}
