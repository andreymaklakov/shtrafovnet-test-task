import React, { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Button } from "@mui/material";

import { Customer, Field, FieldName, FormHeaders } from "@/interfaces";
import { forms } from "@/constants/forms";
import {
  createBank_account,
  createInvoice_emails,
  createMetadata,
} from "@/utils/createData";
import { CustomerService } from "@/services/customer.service";

import FormHeader from "../FormHeader";
import AddButton from "../AddButton";
import FormBody from "../FormBody";

import styles from "./Collapse.module.scss";

interface CollapseProps {
  onCloseModal: () => void;
  onAdd: (newCustomer: Customer) => void;
}

const Collapse: FC<CollapseProps> = ({ onCloseModal, onAdd }) => {
  const [isOpen, setIsOpen] = useState<Record<FormHeaders, boolean>>({
    "Детали Клиента": true,
    "Детали организации": true,
    "Банковские счета": true,
    "Emails для счетов": true,
    Meta: true,
  });
  const [changedForms, setChangedForms] = useState(forms);
  const [isDefaultAcc, setIsDefaultAcc] = useState("acc_name");

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const toggleIsOpen = (header: FormHeaders): void => {
    setIsOpen((prevState) => ({
      ...prevState,
      [header]: !prevState[header],
    }));
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const typedData: Record<FieldName, string> = data as Record<
      FieldName,
      string
    >;

    const {
      addr,
      email,
      inn,
      ogrn,
      org_name,
      deferral_days,
      kpp,
      credit_limit,
      name,
    } = typedData;

    const date: string = new Date().toJSON();

    const dataKeys = Object.keys(data);

    const customer: Customer = {
      name,
      email,
      deferral_days: Number(deferral_days),
      org: {
        id: nanoid(),
        name: org_name,
        inn,
        kpp,
        ogrn,
        addr,
        bank_accounts: createBank_account(dataKeys, data, isDefaultAcc, date),
        created_at: date,
        updated_at: date,
      },
      balance: {
        currency: "RUB",
        current_amount: 90000,
        credit_limit: Number(credit_limit),
        available_amount: 90000,
      },
      metadata: createMetadata(dataKeys, data),
      created_at: date,
      updated_at: date,
      status: "active",
      invoice_prefix: "",
      invoice_emails: createInvoice_emails(dataKeys, data),
    };

    try {
      const response = await CustomerService.createCustomer(customer);

      setChangedForms((prevstate) =>
        prevstate.map((form) => {
          if (form.name === "metadata") {
            form.fields = [];
          } else {
            form.fields = [form.fields[0]];
          }

          if (form.name === "metadata") {
            form.fields = [];
          }

          return form;
        })
      );

      onAdd(response);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (name: string) => {
    setChangedForms((prevstate) =>
      prevstate.map((form) => {
        if (form.name === name) {
          if (name === "metadata" && !form.fields.length) {
            const newField = [
              {
                name: "key",
                label: "Ключ",
                error: "Введите Ключ",
                type: "text",
              },
              {
                name: "value",
                label: "Значение",
                error: "Введите Значение",
                type: "text",
              },
            ];

            form.fields.push(newField);
          } else {
            const newField: Field[] = JSON.parse(
              JSON.stringify(form.fields[0])
            );

            newField.map((item) => {
              item.name = item.name + form.fields.length;

              return item;
            });

            form.fields.push(newField);
          }
        }

        return form;
      })
    );
  };

  const handleDelete = (index: number, name: string) => {
    setChangedForms((prevstate) =>
      prevstate.map((form) => {
        if (form.name === name) {
          form.fields = form.fields.filter((field, i) => {
            if (i !== index) {
              return true;
            }
            field.forEach((item) => unregister(item.name));
            return false;
          });

          if (name === "bank_accounts") {
            if (form.fields.length === 1) {
              setIsDefaultAcc(form.fields[0][0].name);
            }
          }
        }

        return form;
      })
    );
  };

  const handleChangeDefaultAcc = (index: number, fields: Field[][]) => {
    setIsDefaultAcc(fields[index][0].name);
  };

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {changedForms.map((form) => (
            <div key={form.header}>
              <FormHeader
                header={form.header}
                onClick={toggleIsOpen}
                isOpen={isOpen[form.header]}
              />

              <FormBody
                fields={form.fields}
                name={form.name}
                isOpen={isOpen[form.header]}
                errors={errors}
                isDefaultAcc={isDefaultAcc}
                onChangeDefaultAcc={handleChangeDefaultAcc}
                onDelete={handleDelete}
                register={register}
              />

              <AddButton
                name={form.name}
                isOpen={isOpen[form.header]}
                onClick={handleAdd}
              />
            </div>
          ))}

          <Button
            variant="contained"
            type="submit"
            className={styles.submit_btn}
          >
            Создать
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Collapse;
