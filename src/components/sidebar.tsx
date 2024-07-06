import Config from "@/dto/config.dto";

export default function Sidebar({ config }: { config: Config }) {
  let h2Tapped = 0;
  const h2Onclick = () => {
    console.log(h2Tapped);
    h2Tapped = h2Tapped + 1;
    if (h2Tapped > 3) {
      document.location.href = "/settings";
    }
  };

  const viewLogOnClick = () => (window.location.href = "/logs");

  return (
    <div className="sidebar">
      <label htmlFor="check-btn">
        <span className="close">×</span>
      </label>
      <img className="mnd-logo" src={"img/drawable/mnd.png"} />
      <h2 onClick={h2Onclick}>국방모바일보안</h2>
      <p>
        고객지원센터
        <br />
        02) 6424 - 5282 ~ 5284
      </p>
      <hr className="main" />
      <div className="subtitle">
        <span>앱 정보</span>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon" src={"images/img_ico_menu_guide.png"} />
        <span>사용가이드</span>
        <img className="arrow" src={"img/arrow.png"} />
      </div>
      <hr className="sub" />
      <div id="view-log" className="content" onClick={viewLogOnClick}>
        <img className="icon" src={"images/img_ico_menu_log.png"} />
        <span>로그보기</span>
        <img className="arrow" src={"img/arrow.png"} />
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon2" src={"images/img_ico_menu_voice.png"} />
        <span>음성알림</span>
        <br />
        <small>차단 또는 허용 시 음성 알림</small>
        <label htmlFor="check-voice-pref">
          <input id="check-voice-pref" type="checkbox" hidden></input>
          <img id="voice-pref" className="toggle" />
        </label>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon2" src={"images/img_ico_menu_vibration.png"} />
        <span>진동알림</span>
        <br />
        <small>차단 또는 허용 시 진동 알림</small>
        <label htmlFor="check-vibe-pref">
          <input id="check-vibe-pref" type="checkbox" hidden></input>
          <img id="vibe-pref" className="toggle" />
        </label>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon" src={"images/img_ico_menu_gps.png"} />
        <span>위치기반 해제</span>
        <img className="arrow" src={"img/arrow.png"} />
      </div>
      <hr className="sub" />
      <div className="subtitle">
        <span>시스템 정보</span>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon3" src={"images/img_ico_check.png"} />
        <span>제조사</span>
        <span className="text" id="sidebar-manufactor">
          {config.brand}
        </span>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon3" src={"images/img_ico_check.png"} />
        <span>모델명</span>
        <span className="text" id="sidebar-model">
          {config.modelname}
        </span>
      </div>
      <hr className="sub" />
      <div className="content">
        <img className="icon3" src={"images/img_ico_check.png"} />
        <span>OS버전</span>
        <span className="text" id="sidebar-os">
          {config.osVersion}
        </span>
      </div>
    </div>
  );
}
