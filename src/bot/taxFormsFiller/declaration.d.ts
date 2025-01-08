export interface TaxFillerOptions {
  page: Page;
  timeout?: number;
  hash?: string;
}

export interface NavigationResult {
  success: boolean;
  error?: Error;
}
