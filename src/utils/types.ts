import { Page } from 'playwright';

export interface BrowserSession {
  uid: string;
  documentId: string;
  cookies: any[];
  key: string;
}

export interface TaxFillerOptions {
  page: Page;
  timeout?: number;
  hash?: string;
}

export interface NavigationResult {
  success: boolean;
  error?: Error;
}

export type Form = {
  form_name: string;
  form_data: FormData;
};

export type FormData = {
  [key: string]: Attribute;
}

export type Attribute = {
  value: Value;
  label: string;
  type: string | string[] | string[][];
  dataTestId?: string;
  id?: string;
  xpath?: string;
  custom?: string;
  inputIndex?: number;
  page_href?: string;
  table_fn?: string;
}

export type Value = string | number | boolean | string[] | number[];

export type ExportProgress = {
  status: 'idle' | 'in_progress' | 'completed' | 'error'; 
  overall: number; 
  children: Record<string, number>;
  message?: string;
}