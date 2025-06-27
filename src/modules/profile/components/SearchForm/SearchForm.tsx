import { useLazyGetPlayerInfoQuery } from "@/modules/profile";
import { Button, Input } from "@/shared/ui";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Введите ник игрока"
          value={value}
          onChange={handleChange}
        />
        <Button>Click!</Button>
      </form>
    </>
  );
};
