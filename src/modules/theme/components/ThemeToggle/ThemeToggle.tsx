import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { toggleTheme } from "@/modules/theme";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <Button onClick={() => dispatch(toggleTheme())} variant="toggle-theme">
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </Button>
  );
};
