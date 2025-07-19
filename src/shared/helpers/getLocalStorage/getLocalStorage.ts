export const getLocalStorage = <T>(getItem: string, defaultValue: T | T[]) => {
  const item = localStorage.getItem(getItem);
  return item !== null ? JSON.parse(item) : defaultValue;
};
