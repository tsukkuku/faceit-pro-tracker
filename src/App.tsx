import { useGetPlayerInfoQuery } from "@/modules/profile";

function App() {
  const { data } = useGetPlayerInfoQuery();
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => console.log(data)}>Click!</button>
    </>
  );
}

export default App;
