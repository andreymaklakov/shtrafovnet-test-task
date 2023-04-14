import React, { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { Field } from "@/interfaces";
import SwitchItem from "../SwitchItem";
import DeleteButton from "../DeleteButton";
import Input from "../Input";

import styles from "./FormBody.module.scss";

interface FormProps {
  fields: Field[][];
  name: string;
  isOpen: boolean;
  errors: FieldErrors;
  isDefaultAcc: string;
  onChangeDefaultAcc: (index: number, fields: Field[][]) => void;
  onDelete: (index: number, name: string) => void;
  register: UseFormRegister<FieldValues>;
}

const FormBody: FC<FormProps> = ({
  fields,
  name,
  isOpen,
  errors,
  isDefaultAcc,
  onChangeDefaultAcc,
  onDelete,
  register,
}) => {
  return (
    <>
      {fields.map((field, fieldIndex) => {
        if (fields.length) {
          return (
            <div key={fieldIndex} className={styles.field_wrapper}>
              {isOpen ? (
                <div>
                  <div className={styles.input_wrapper}>
                    <div>
                      {field.map((item) => (
                        <Input
                          key={item.name}
                          item={item}
                          errors={errors}
                          register={register}
                        />
                      ))}
                    </div>

                    <DeleteButton
                      name={name}
                      fieldIndex={fieldIndex}
                      onDelete={onDelete}
                    />
                  </div>

                  {name === "bank_accounts" ? (
                    <SwitchItem
                      label="Дефолтный счет"
                      isDefaultAcc={isDefaultAcc}
                      onChange={onChangeDefaultAcc}
                      name={field[0].name}
                      index={fieldIndex}
                      fields={fields}
                    />
                  ) : (
                    ""
                  )}

                  {fields.length > 1 ? <hr /> : ""}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default FormBody;
