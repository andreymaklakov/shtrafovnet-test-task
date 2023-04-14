import React, { FC, useCallback } from "react";
import { useClipboard } from "use-clipboard-copy";
import { DataGrid } from "@mui/x-data-grid";

import { columns } from "@/constants/columns";
import { Customers } from "@/interfaces";

import styles from "./Table.module.scss";

const Table: FC<Customers> = ({ customers }) => {
  const clipboard = useClipboard();

  const handleCopyId = useCallback(
    (id: string) => {
      clipboard.copy(id);
    },
    [clipboard.copy]
  );

  return (
    <div className={styles.table}>
      <DataGrid
        rows={customers}
        columns={columns(handleCopyId)}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
