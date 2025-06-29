import { useEffect, type FC, type ReactNode } from "react";
import { useAppSelector } from "@/shared/hooks/redux";

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};
