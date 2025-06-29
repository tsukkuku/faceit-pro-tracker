import { useAppDispatch } from "@/shared/hooks/redux";
import { Button } from "@/shared/ui";
import { toggleTheme } from "@/modules/theme";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(toggleTheme())}>Переключить</Button>;
};
