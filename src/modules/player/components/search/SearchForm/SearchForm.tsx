import { useLazyGetPlayerIDQuery } from "@/modules/player/api";
import { Button, Input } from "@/shared/ui";
import { FaSearch } from "react-icons/fa";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchForm.module.scss";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [trigger] = useLazyGetPlayerIDQuery();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      setError("Поле ввода не должно быть пустым");
      return;
    }
    try {
      const result = await trigger(value.trim()).unwrap();
      navigate(`/player/${result.player_id}`);
    } catch (error: any) {
      setError("Игрок не найден");
    }
  };
  return (
    <div className={style.searchForm}>
      <form onSubmit={onSubmit} className={style.form}>
        <Input
          placeholder="Введите точный ник игрока"
          value={value}
          onChange={handleChange}
          className={error ? style.error : style.input}
        />
        <Button variant="search-primary">
          <FaSearch />
        </Button>
      </form>
      <span className={style.errorMessage}>{error && error}</span>
    </div>
  );
};
