import { Form } from "@/interfaces";

export const forms: Form[] = [
  {
    header: "Детали Клиента",
    name: "customer",
    fields: [
      [
        {
          name: "name",
          label: "Имя",
          error: "Введите Имя",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          error: "Введите Email",
          type: "text",
        },
        {
          name: "deferral_days",
          label: "Дней отсрочки",
          error: "Дней отсрочки должна быть больше или ровна нулю",
          type: "number",
        },
        {
          name: "credit_limit",
          label: "Кредитный лимит",
          error: "Кредитный лимит должн быть больше или ровна нулю",
          type: "number",
        },
      ],
    ],
  },
  {
    header: "Детали организации",
    name: "org",
    fields: [
      [
        {
          name: "org_name",
          label: "Название организации",
          error: "Введите Название организации",
          type: "text",
        },
        {
          name: "inn",
          label: "ИНН организации",
          error: "Введите ИНН организации",
          type: "number",
        },
        {
          name: "kpp",
          label: "КПП организации",
          error: "Введите КПП организации",
          type: "number",
        },
        {
          name: "ogrn",
          label: "ОГРН организации",
          error: "Введите ОГРН организации",
          type: "number",
        },
        {
          name: "addr",
          label: "Юредический адрес",
          error: "Введите Юредический адрес",
          type: "text",
        },
      ],
    ],
  },
  {
    header: "Банковские счета",
    name: "bank_accounts",
    fields: [
      [
        {
          name: "acc_name",
          label: "Название cчета",
          error: "Введите Название счета",
          type: "text",
        },
        {
          name: "account_number",
          label: "Номер счета",
          error: "Введите Номер счета",
          type: "number",
        },
        {
          name: "bik",
          label: "БИК счета",
          error: "Введите БИК счета",
          type: "number",
        },
        {
          name: "corr_account_number",
          label: "Корр. номер счета",
          error: "Введите Корр. номер счета",
          type: "number",
        },
      ],
    ],
  },
  {
    header: "Emails для счетов",
    name: "invoice_emails",
    fields: [
      [
        {
          name: "invoice_emails",
          label: "Email",
          error: "Введите Email",
          type: "text",
        },
      ],
    ],
  },
  {
    header: "Meta",
    name: "metadata",
    fields: [],
  },
];
