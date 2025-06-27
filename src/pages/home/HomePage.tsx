import { useGetPlayerInfoQuery } from "@/modules/profile";
import { Button } from "@/shared/ui";

export const HomePage = () => {
  const { data } = useGetPlayerInfoQuery();
  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={() => console.log(data)}>Click!</Button>
    </>
  );
};
