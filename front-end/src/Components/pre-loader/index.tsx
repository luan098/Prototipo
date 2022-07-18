import spinner from "/spinner.svg";
import "./index.css";

const PreLoader = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src="/img/logo.png"
        alt="AdminLTELogo"
        height="60"
        width="60"
      />
    </div>
  );
};

export default PreLoader;
