// Types
export interface IAccount {
  email: string;
  password: string;
}

export interface IEmailInput {
  page: Page;
  email: string;
}

export interface IPasswordInput {
  page: Page;
  password: string;
}

export interface IOTPCheck {
  page: Page;
}

export interface IOTPInput {
  page: Page;
  factorCode: string;
}

export interface IAuthResponse {
  page: Page;
  success: boolean;
}
