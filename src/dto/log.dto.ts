export const initialStateLog: Log[] = [
  {
    isOpened: true,
    date: "2023-07-10T13:23",
    title: "최초설치",
    detail: "Android 10 | 2.1.09",
  },
  {
    isOpened: false,
    date: "2023-07-10T13:24",
    title: "카메라 차단 | 수동",
    detail: "Android 10 | 2.1.09",
  },
];

export class Log {
  constructor(isOpened: boolean, date: string, title: string, detail: string) {
    this.isOpened = isOpened;
    this.date = date;
    this.title = title;
    this.detail = detail;
  }

  isOpened: boolean;
  date: string;
  title: string;
  detail: string;
}
