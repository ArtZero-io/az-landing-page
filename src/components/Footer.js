import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      
      <ul className="social">
        <li className="telegram">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/artzero_io"
          >
            <div className="icon" />
          </a>
        </li>
        <li className="twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ArtZero_io"
          >
            <div className="icon" />
          </a>
        </li>
        <li className="email">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:admin@artzero.io"
          >
            <div className="icon" />
          </a>
        </li>
      </ul>
      <div className="copyright">
        © Copyright 2022 artZero. <div className="copyright-break"></div>All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
