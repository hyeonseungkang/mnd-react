import { dateToStr } from "@/common/date-to-str";
import { Log } from "@/dto/log.dto";

export default function YellowBg({ logs }: { logs: Log[] }) {
  return (
    <>
      <input id="check-btn" type="checkbox" hidden />
      <div className="yellow-bg">
        <div className="title">
          <label htmlFor="check-btn">
            <span className="menu-btn">메뉴</span>
          </label>
          <img className="mnd-logo" src={"img/drawable/mnd.png"} />
          <img
            className="alert-btn"
            src={"img/drawable/img_common_btn_alert.png"}
          />
        </div>
        <div className="installed-date">
          <span id="installed-date-text">
            <strong>설치일시 : </strong>
            {dateToStr(new Date(logs.pop()?.date as string), false)}
          </span>
          <br />
          <span id="closed-date-text">
            <strong>차단일시 : </strong>
            {dateToStr(new Date(logs[0]?.date), false)}
          </span>
        </div>
        <div className="installed-date">
          <strong className="strong-1">고객지원센터</strong>
          <strong className="strong-2">02) 6424 - 5282 ~ 5284</strong>
          <span className="worktime">09~21시(평일)/09~18시(휴일)</span>
        </div>
      </div>
      <img
        className="yellow-bg-bottom"
        src={"img/drawable-hdpi-v4/img_bg_user_soldier_sub.png"}
      />
    </>
  );
}
