import { useLazyGetPlayerInfoQuery } from "@/modules/player/api";
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
    if (!value) return console.log("Поле не должно быть пустым");
    try {
      const result = await trigger(value.trim()).unwrap();
      navigate(`/player/${result.player_id}`);
    } catch (error: any) {
      console.log(error.message);
    }
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
