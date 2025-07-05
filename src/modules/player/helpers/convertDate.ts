export const convertDate = (date: string) => {
  const registrationDate = new Date(date);
  return registrationDate.toLocaleDateString();
};
