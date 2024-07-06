"use client";
import FooterWithAllow from "@/components/footer-with-allow";
import ProgressCircle from "@/components/progress-circle";
import Sidebar from "@/components/sidebar";
import YellowBg from "@/components/yellow-bg";
import Config, { initialStateConfig } from "@/dto/config.dto";
import { initialStateLog, Log } from "@/dto/log.dto";
import { useEffect, useState } from "react";
import "./index.css";

export default function Home() {
  const [config, setConfig] = useState(initialStateConfig);
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
    if (!!window.localStorage.getItem("config")) {
      setConfig(JSON.parse(window.localStorage.getItem("config")!));
    }
  }, []);

  return (
    <>
      <YellowBg logs={logs} />
      <ProgressCircle logs={logs}  />
      <FooterWithAllow config={config} />
      <Sidebar config={config} />
    </>
  );
}
