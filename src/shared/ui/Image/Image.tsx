import { useEffect, useState, type FC, type ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const Image: FC<ImageProps> = ({ fallback, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const onError = () => setImgSrc(fallback);
  return <img src={imgSrc || fallback} onError={onError} {...props} />;
};
