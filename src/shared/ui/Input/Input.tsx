import type { FC, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input type="text" className={clsx(style.primary, className)} {...props} />
  );
};
