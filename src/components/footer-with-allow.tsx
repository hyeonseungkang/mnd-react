import Config from "@/dto/config.dto";

export default function FooterWithAllow({ config }: { config: Config }) {
  return (
    <div className="footer">
      <button>기능해제(비콘)</button>
      <div className="copyright">
        <span className="label">Version </span>
        <span className="label" id="version-text">
          {config.version}
        </span>
      </div>
    </div>
  );
}
