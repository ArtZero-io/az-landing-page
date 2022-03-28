import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <div className="telegram">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/artzero_io"
          >
            <div className="icon" />
          </a>
        </div>
        <div className="twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ArtZero_io"
          >
            <div className="icon" />
          </a>
        </div>
        <div className="email">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:admin@artzero.io"
          >
            <div className="icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        © Copyright 2022 artZero. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
