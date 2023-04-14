import { IconButton } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { getDate } from "@/utils/date";

export const columns = (onCopy: (id: string) => void) => {
  const cols: GridColDef[] = [
    { field: "name", headerName: "Имя", width: 200 },
    {
      field: "id",
      headerName: "ID",
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <span>{params.row.id}</span>{" "}
          <IconButton onClick={() => onCopy(params.row.id)}>
            <ContentCopyIcon />
          </IconButton>
        </>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "deferral_days",
      headerName: "Отсрочка оплаты",
      width: 150,
    },
    {
      field: "created_at",
      headerName: "Создан",
      width: 100,
      valueGetter: (params: GridValueGetterParams) =>
        `${getDate(params.row.created_at)}`,
    },
    {
      field: "updated_at",
      headerName: "Изменен",
      width: 100,
      valueGetter: (params: GridValueGetterParams) =>
        `${getDate(params.row.created_at)}`,
    },
  ];

  return cols;
};
