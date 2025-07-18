import clsx from "clsx";
import style from "./Avatar.module.scss";
import type { FC, ImgHTMLAttributes } from "react";
import { Image } from "../Image/Image";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  fallback,
  size = "md",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(style[size], style.avatar)}
      data-testid="avatar-container"
    >
      <Image
        src={src}
        fallback={fallback}
        className={clsx(style.avatarPhoto, className)}
        {...props}
      />
    </div>
  );
};
