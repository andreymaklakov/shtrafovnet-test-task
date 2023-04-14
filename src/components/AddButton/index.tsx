import React, { FC } from "react";

import { Button } from "@mui/material";

import styles from "./AddButton.module.scss";

interface AddButtonProps {
  name: string;
  isOpen: boolean;
  onClick: (name: string) => void;
}

const AddButton: FC<AddButtonProps> = ({ name, isOpen, onClick }) => {
  return (
    <>
      {isOpen || name === "metadata" ? (
        <>
          {name === "bank_accounts" ||
          name === "invoice_emails" ||
          name === "metadata" ? (
            <Button
              className={styles.add_btn}
              variant="outlined"
              onClick={() => onClick(name)}
            >
              Добавить еще
            </Button>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AddButton;
