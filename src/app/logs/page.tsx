"use client";

import { dateToStr } from "@/common/date-to-str";
import { initialStateLog, Log } from "@/dto/log.dto";
import { useEffect, useState } from "react";
import "./log.css";

export default function Logs() {
  const [logs, setLogs] = useState<Log[]>(initialStateLog);
  useEffect(() => {
    if (!!window.localStorage.getItem("logs")) {
      setLogs(
        JSON.parse(window.localStorage.getItem("logs")!).sort(
          (a: Log, b: Log) =>
            new Date(b.date).valueOf() - new Date(a.date).valueOf()
        )
      );
    }
  }, []);

  const locationToRoot = () => (window.location.href = "/");

  return (
    <>
      <div className="titlebar">
        <img
          className="back"
          src="images/img_common_back.png"
          onClick={locationToRoot}
        />
        로그보기
      </div>
      <div className="logs-here">
        {logs.map((log) => (
          <p
            key={log.date}
            className={log.isOpened ? "camera-opened" : "camera-closed"}
          >
            [{dateToStr(new Date(log.date))}]<br />
            {log.title}
            <br />
            {log.detail}
            <br />
          </p>
        ))}
      </div>
      <div className="footer">
        <button onClick={locationToRoot}>닫기</button>
      </div>
    </>
  );
}
