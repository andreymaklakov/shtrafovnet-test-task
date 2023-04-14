import React, { FC } from "react";
import Switch from "@mui/material/Switch";

import { Field } from "@/interfaces";

interface SwitchProps {
  label: string;
  isDefaultAcc: string;
  onChange: (index: number, fields: Field[][]) => void;
  name: string;
  index: number;
  fields: Field[][];
}

const SwitchItem: FC<SwitchProps> = ({
  label,
  isDefaultAcc,
  onChange,
  name,
  index,
  fields,
}) => {
  return (
    <div>
      <p>{label}</p>
      <Switch
        checked={isDefaultAcc === name}
        onChange={() => onChange(index, fields)}
        inputProps={{ "aria-label": "controlled" }}
        disabled={isDefaultAcc === name}
      />
    </div>
  );
};

export default SwitchItem;
