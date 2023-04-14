import React, { FC } from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { FormHeaders } from "@/interfaces";

import styles from "./FormHeader.module.scss";

interface FormHeaderProps {
  header: FormHeaders;
  onClick: (header: FormHeaders) => void;
  isOpen: boolean;
}

const FormHeader: FC<FormHeaderProps> = ({ header, onClick, isOpen }) => {
  return (
    <div className={styles.collapse_btn} onClick={() => onClick(header)}>
      {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}

      <span>{header}</span>
    </div>
  );
};

export default FormHeader;
