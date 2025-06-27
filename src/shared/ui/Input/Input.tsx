import type { FC, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";
import clsx from "clsx";

type InputVariants = "primary" | "secondary";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
}

export const Input: FC<InputProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <input type="text" className={clsx(style[variant], className)} {...props} />
  );
};
