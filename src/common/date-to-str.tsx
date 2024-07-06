export const twoDigits = (n: number): string => {
  if (String(n).length == 1) {
    return "0" + n;
  } else return String(n);
};

export const dateToStr = (date: Date, isSecVisible = true) => {
  const year = date.getFullYear() - 2000;
  const month = twoDigits(date.getMonth() + 1);
  const day = twoDigits(date.getDate());
  const hour = twoDigits(date.getHours());
  const min = twoDigits(date.getMinutes());
  const sec = twoDigits(Math.floor(Math.random() * (60 - 0) + 0));
  return `${year}.${month}.${day} ${hour}:${min}${
    isSecVisible ? ":" + sec : ""
  }`;
};
