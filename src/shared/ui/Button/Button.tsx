import type { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "search-primary"
  | "player-place"
  | "toggle-theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button className={clsx(style[variant], className)} {...props}>
      {children}
    </button>
  );
};
