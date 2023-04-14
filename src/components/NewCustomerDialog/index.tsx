import React, { FC, useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Collapse from "../Collapse";
import { Customer } from "@/interfaces";

import styles from "./NewCustomerDialog.module.scss";

interface NewCustomerDialogProps {
  onAdd: (newCustomer: Customer) => void;
}

const NewCustomerDialog: FC<NewCustomerDialogProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Добавить клиента
      </Button>

      <Dialog open={open} onClose={handleClose} scroll={"paper"}>
        <DialogTitle>Cоздание цены</DialogTitle>

        <DialogContent dividers>
          <DialogContentText tabIndex={-1} className={styles.dialog}>
            <Collapse onCloseModal={handleClose} onAdd={onAdd} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewCustomerDialog;
