import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      >
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
        © Copyright 2022 artZero. <div className="copyright-break"></div>All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
