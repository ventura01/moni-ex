"use client";

import { CustomBtnProps } from "@/types";
import { ArrowDown } from "@phosphor-icons/react";

type Props = {};

const CustomBtn = ({title, containerStyles, handleClick, iconStyles}:CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span> <ArrowDown size={32} className={`inline-block ${iconStyles}`} />
    </button>
  );
};

export default CustomBtn;
