// import {DateTime} from 'luxon';
// import { version } from "package.json";

const Footer = () => {
  return (
    <footer className="main-footer">
      <strong>
        {/* <span>Copyright © {DateTime.now().toFormat('y')} </span> */}
        <a
          href="https://github.com/luan098"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b>
        <span>&nbsp;1.0.0</span>
      </div>
    </footer>
  );
};

export default Footer;
