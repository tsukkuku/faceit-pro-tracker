export const formatDate = (date: string | number) => {
  const newDate = new Date(date);
  const userLocalTime = navigator.language;

  if (typeof date === "string") {
    return newDate.toLocaleString(userLocalTime, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } else {
    return newDate.toLocaleDateString(userLocalTime, {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};
