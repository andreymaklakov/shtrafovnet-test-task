export interface Customers {
  customers: Customer[];
}

export interface Customer {
  id?: string;
  name: string;
  email: string;
  deferral_days: number;
  org: Org;
  balance: Balance;
  metadata: {};
  created_at: string;
  updated_at: string;
  status: string;
  invoice_prefix: string;
  invoice_emails: string[];
}

export interface Org {
  id: string;
  name: string;
  inn: string;
  kpp: string;
  ogrn: string;
  addr: string;
  bank_accounts: BankAccount[];
  created_at: string;
  updated_at: string;
}

export interface BankAccount {
  id: string;
  name: string;
  bik: string;
  account_number: string;
  corr_account_number: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Balance {
  currency: string;
  current_amount: number;
  credit_limit: number;
  available_amount: number;
}

export type FormHeaders =
  | "Детали Клиента"
  | "Детали организации"
  | "Банковские счета"
  | "Emails для счетов"
  | "Meta";

export interface Form {
  header: FormHeaders;
  fields: Field[][];
  name: string;
}

export type FieldName =
  | "name"
  | "email"
  | "deferral_days"
  | "credit_limit"
  | "org_name"
  | "inn"
  | "kpp"
  | "ogrn"
  | "addr"
  | "acc_name"
  | "account_number"
  | "bik"
  | "corr_account_number"
  | "invoice_emails";

export interface Field {
  name: string;
  label: string;
  error: string;
  type: string;
}

export interface InputValues {
  name: string;
  email: string;
  deferral_days: number | null;
  credit_limit: number | null;
}
