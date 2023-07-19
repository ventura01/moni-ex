import { MouseEventHandler } from "react";

export type NavbarLinkProps = { title: string; url: string };
export interface CustomBtnProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  iconStyles?: string;
  btnType: "submit" | "button";
  disabled?: boolean;
}
