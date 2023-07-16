"use client";

import { CustomBtnProps } from "@/types";
import { ArrowDown } from "@phosphor-icons/react";

type Props = {};

const CustomBtn = ({
  title,
  containerStyles,
  handleClick,
  iconStyles,
  btnType,
}: CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span> {btnType === "button" && <ArrowDown size={18} className={`inline-block ${iconStyles}`} />}
    </button>
  );
};

export default CustomBtn;
