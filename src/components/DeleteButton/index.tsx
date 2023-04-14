import React, { FC } from "react";
import { Button } from "@mui/material";

interface DeleteButtonProps {
  name: string;
  fieldIndex: number;
  onDelete: (fieldIndex: number, name: string) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  name,
  fieldIndex,
  onDelete,
}) => {
  return (
    <>
      {((name === "bank_accounts" || name === "invoice_emails") &&
        fieldIndex > 0) ||
      name === "metadata" ? (
        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(fieldIndex, name)}
        >
          Удалить
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default DeleteButton;
