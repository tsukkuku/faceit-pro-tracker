import type { FC } from "react";
import { Button } from "@/shared/ui";
import { MdTableRows } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import style from "./SwitchButton.module.scss";

interface SwitchButtonProps {
	isFlex: boolean
	setIsFlex: (value: boolean) => void
}

export const SwitchButton: FC<SwitchButtonProps> = ({isFlex, setIsFlex}) => {
  return (
    <div className={style.switchVariant}>
      <div onClick={() => setIsFlex(true)}>
        <Button className={isFlex ? style.active : style.noActive}>
          <MdTableRows color={isFlex ? "var(--text-color)" : ""} />
        </Button>
      </div>
      <div onClick={() => setIsFlex(false)}>
        <Button className={!isFlex ? style.active : style.noActive}>
          <BsFillGrid3X3GapFill />
        </Button>
      </div>
    </div>
  );
};
