import clsx from "clsx";
import style from "./Button.module.scss";
import type { ButtonHTMLAttributes, FC } from "react";

type ButtonVariant = "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  onClick,
  ...props
}) => {
  return (
    <button className={clsx(style[variant])} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
