interface Options {
  year: "numeric";
  month: "numeric";
  day: "numeric";
}

export const getDate = (data: string) => {
  const fullDate = new Date(data);

  const options: Options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return fullDate.toLocaleDateString("ru-RU", options);
};
