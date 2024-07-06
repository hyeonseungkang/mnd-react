"use client";

import { dateToStr } from "@/common/date-to-str";
import Config from "@/dto/config.dto";
import { Log } from "@/dto/log.dto";
import { useEffect, useState } from "react";
import "./settings.css";

export default function Settings() {
  const [config, setConfig] = useState(new Config("", "", "", ""));
  const [logs, setLogs] = useState<Log[]>([]);
  const [rawlogs, setRawLogs] = useState("");
  const [newLog, setNewLog] = useState(
    new Log(false, new Date().toString(), "", "")
  );
  const [deleteLogRow, setDeleteLogRow] = useState<null | number>(null);

  useEffect(() => {
    try {
      if (!!window.localStorage.getItem("config")) {
        setConfig(JSON.parse(window.localStorage.getItem("config")!));
      }
      if (!!window.localStorage.getItem("logs")) {
        setRawLogs(window.localStorage.getItem("logs")!);
        setLogs(
          JSON.parse(window.localStorage.getItem("logs")!).sort(
            (a: Log, b: Log) =>
              new Date(b.date).valueOf() - new Date(a.date).valueOf()
          )
        );
      }
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }, []);

  const saveDeviceInfo = () => {
    window.localStorage.setItem("config", JSON.stringify(config));
    window.location.reload();
  };

  const addRow = () => {
    window.localStorage.setItem("logs", JSON.stringify([...logs, newLog]));
    window.location.reload();
  };

  const deleteRow = () => {
    if (!window.localStorage.getItem("logs")) {
      return;
    }
    try {
      const logs = JSON.parse(window.localStorage.getItem("logs")!);
      logs.splice(deleteLogRow, 1);
      window.localStorage.setItem("logs", JSON.stringify(logs));
    } finally {
      window.location.reload();
    }
  };

  const setData = () => {
    window.localStorage.setItem("logs", rawlogs);
    window.location.reload();
  };

  return (
    <div>
      <h1>국방모바일보안(병사용) 설정</h1>
      <hr />
      <ul>
        <li>
          <label>
            앱버전
            <input
              name="version"
              type="text"
              value={config.version}
              onChange={({ target }) =>
                setConfig({ ...config, version: target.value })
              }
            />
          </label>
        </li>
        <li>
          <label>
            제조사
            <input
              name="제조사"
              type="text"
              value={config.brand}
              onChange={({ target }) =>
                setConfig({ ...config, brand: target.value })
              }
            />
          </label>
        </li>
        <li>
          <label>
            모델명
            <input
              name="모델명"
              type="text"
              value={config.modelname}
              onChange={({ target }) =>
                setConfig({ ...config, modelname: target.value })
              }
            />
          </label>
        </li>
        <li>
          <label>
            OS버전
            <input
              name="OS버전"
              type="text"
              value={config.osVersion}
              onChange={({ target }) =>
                setConfig({ ...config, osVersion: target.value })
              }
            />
          </label>
        </li>
        <li>
          <button onClick={saveDeviceInfo}>저장</button>
        </li>
      </ul>
      <hr />
      <h2>로그설정</h2>
      <h3>행 추가</h3>
      <ul>
        <li>
          <label>
            해당로그 카메라 허용인지
            <input
              type="checkbox"
              name="isOpened"
              checked={newLog.isOpened}
              onChange={({ target }) =>
                setNewLog({ ...newLog, isOpened: target.checked })
              }
            />
          </label>
        </li>
        <li>
          <small>허용=회색, 차단=적색</small>
        </li>
        <li>
          <label>
            변동일시
            <input
              type="datetime-local"
              name="date"
              value={newLog.date}
              onChange={({ target }) =>
                setNewLog({ ...newLog, date: target.value })
              }
            />
          </label>
        </li>
        <li>
          <label>
            첫번째행
            <input
              type="text"
              name="title"
              value={newLog.title}
              onChange={({ target }) =>
                setNewLog({ ...newLog, title: target.value })
              }
            />
          </label>
        </li>
        <li>
          <small>예) 카메라 허용 | 비콘</small>
        </li>
        <li>
          <small>예) 카메라 차단 | 수동</small>
        </li>
        <li>
          <label>
            두번째행
            <input
              type="text"
              name="detail"
              value={newLog.detail}
              onChange={({ target }) =>
                setNewLog({ ...newLog, detail: target.value })
              }
            />
          </label>
        </li>
        <li>
          <small>예) Android 10 | 2.1.10</small>
        </li>
        <li>
          <button onClick={addRow}>행추가</button>
        </li>
      </ul>
      <h3>행 제거</h3>
      <ul>
        <li>
          <label>
            행번호
            <input
              value={String(deleteLogRow)}
              onChange={({ target }) => setDeleteLogRow(Number(target.value))}
              type="number"
              name="rowNumber"
            />
          </label>
        </li>
        <li>
          <button onClick={deleteRow}>행제거</button>
        </li>
      </ul>
      <div className="logs">
        {logs.map((log, i) => (
          <p
            key={log.date}
            className={log.isOpened ? "camera-opened" : "camera-closed"}
          >
            {i}th [{dateToStr(new Date(log.date))}]<br />
            {log.title}
            <br />
            {log.detail}
            <br />
          </p>
        ))}
      </div>
      <h3>백업 및 복구</h3>
      <textarea
        value={rawlogs}
        onChange={({ target }) => setRawLogs(target.value)}
      ></textarea>
      <button onClick={setData}>이 데이터로 덮어쓰기</button>
    </div>
  );
}
