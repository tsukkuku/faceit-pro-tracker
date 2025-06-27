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
  className,
  ...props
}) => {
  return (
    <button className={clsx(style[variant], className)} {...props}>
      {children}
    </button>
  );
};
