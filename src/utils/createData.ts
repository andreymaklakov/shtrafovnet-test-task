import { nanoid } from "nanoid";

import { BankAccount } from "@/interfaces";

export const createBank_account = (
  dataKeys: string[],
  data: any,
  isDefaultAcc: string,
  date: string
) => {
  const bankAccsNames = dataKeys.filter((item) => item.includes("acc_name"));
  const bankAccsBiks = dataKeys.filter((item) => item.includes("bik"));
  const bankAccsNumbers = dataKeys.filter((item) =>
    item.includes("account_number")
  );
  const bankAccsCorNumbers = dataKeys.filter((item) =>
    item.includes("corr_account_number")
  );
  const bank_accounts: BankAccount[] = bankAccsNames.map((name, i) => {
    return {
      id: nanoid(),
      name: data[name],
      bik: data[bankAccsBiks[i]],
      account_number: data[bankAccsNumbers[i]],
      corr_account_number: data[bankAccsCorNumbers[i]],
      is_default: isDefaultAcc === name,
      created_at: date,
      updated_at: date,
    };
  });

  return bank_accounts;
};

export const createMetadata = (dataKeys: string[], data: any) => {
  const metaKeys = dataKeys.filter((item) => item.includes("key"));
  const metaValues = dataKeys.filter((item) => item.includes("value"));
  const metaArr = metaKeys.map((key, i) => {
    return {
      [data[key]]: data[metaValues[i]],
    };
  });
  const metadata = metaArr.reduce((acc, obj) => Object.assign(acc, obj), {});

  return metadata;
};

export const createInvoice_emails = (dataKeys: string[], data: any) => {
  const invoice_emailsKeys = dataKeys.filter((item) =>
    item.includes("invoice_emails")
  );
  const invoice_emails = invoice_emailsKeys.map((key) => data[key]);

  return invoice_emails;
};
