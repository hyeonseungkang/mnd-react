"use client";
import { useInterval } from "../common/use-interval";
import { useState } from "react";
import { Log } from "@/dto/log.dto";
import { twoDigits } from "@/common/date-to-str";

export default function ProgressCircle({ logs }: { logs: Log[] }) {
  const [currentDeg, setCurrentDeg] = useState(0);
  const [times, setTimes] = useState(
    <>
      0 일
      <br />
      00 : 00 : <b>00</b>
    </>
  );
  useInterval(() => setCurrentDeg(currentDeg + 30), 150);
  useInterval(() => {
    const timeDiff =
      (new Date().valueOf() - new Date(logs[0].date).valueOf()) / 1000;
    const count = {
      days: 0,
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
    count["days"] = Math.floor(timeDiff / (24 * 3600));
    count["hours"] = twoDigits(Math.floor((timeDiff % (24 * 3600)) / 3600));
    count["minutes"] = twoDigits(Math.floor((timeDiff % 3600) / 60));
    count["seconds"] = twoDigits(Math.floor(timeDiff % 60));
    setTimes(
      <>
        {count.days} 일<br />
        {count.hours} : {count.minutes} : <b>{count.seconds}</b>
      </>
    );
  }, 1000);

  return (
    <div className="main">
      <img className="helpcall-logo" src={"img/mx.png"} />
      <div className="progress">
        <img
          className="progress-circle"
          src={"img/drawable-hdpi-v4/img_progress_circle.png"}
          style={{ transform: "rotate(" + currentDeg + "deg)" }}
        />
        <img
          className="deny-camera"
          src={"img/drawable-hdpi-v4/img_policy_state_camera_block.png"}
        />
        <span className="date">{times}</span>
      </div>
    </div>
  );
}
