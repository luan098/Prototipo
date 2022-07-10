import spinner from "/spinner.svg";
import "./index.css";

const PreLoader = () => {
  return (
    <div className="pre-loader">
      <img src={spinner} className="pre-loader__spinner" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default PreLoader;
