import type { FC, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
  return <input type="text" className={style.customInput} {...props} />;
};
