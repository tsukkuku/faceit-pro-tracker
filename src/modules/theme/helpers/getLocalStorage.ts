export const getLocalStorage = () => {
  const item = localStorage.getItem("theme");
  return item !== null ? JSON.parse(item) : "dark";
};
