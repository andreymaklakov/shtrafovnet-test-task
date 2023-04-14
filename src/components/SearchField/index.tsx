import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchField.module.scss";

interface SearchFieldProps {
  onSubmit: (value: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(value);

    setValue("");
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <TextField
        label="Поиск"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />

      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchField;
