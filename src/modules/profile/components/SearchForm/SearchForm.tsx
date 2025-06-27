import { useLazyGetPlayerInfoQuery } from "@/modules/profile";
import { Button, Input } from "@/shared/ui";
import { FaSearch } from "react-icons/fa";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchForm.module.scss";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [trigger] = useLazyGetPlayerInfoQuery();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await trigger(value.trim()).unwrap();
    navigate(`/player/${result.player_id}`);
  };
  return (
    <>
      <form onSubmit={onSubmit} className={style.form}>
        <Input
          placeholder="Введите ник игрока"
          value={value}
          onChange={handleChange}
        />
        <Button variant="search-primary">
          <FaSearch />
        </Button>
      </form>
    </>
  );
};
