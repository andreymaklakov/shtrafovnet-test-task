import React, { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { TextField } from "@mui/material";

import { Field } from "@/interfaces";
import { validation } from "@/utils/formsValidation";

import styles from "./Input.module.scss";

interface InputProps {
  item: Field;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const Input: FC<InputProps> = ({ item, errors, register }) => {
  return (
    <div className={styles.inputs_wrapper}>
      <TextField
        error={!!errors[item.name]}
        label={item.label}
        required
        type={item.type}
        {...register(item.name, validation(item.type, item.label, item.error))}
      />

      <div className={styles.error}>
        {errors[item.name] && (
          <p>{errors[item.name]?.message?.toString() || item.error}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
