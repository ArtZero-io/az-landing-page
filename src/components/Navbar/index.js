// import { Link } from "react-router-dom";

import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        <Link
          _hover={{
            cursor: "pointer",
          }}
          href="/"
        >
          <img src="/assets/logo.png" alt="logo" />
        </Link>
      </span>

      {links.map(({ label, href }) => (
        <span key={label}>
          <Link
            _hover={{
              cursor: "pointer",
            }}
            href={href}
          >
            {label}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navbar;

const links = [
  { label: "Home", href: "/" },
  { label: "AIRDROP/BOUNTY", href: "#airdrop" },
  { label: "ROAD MAP", href: "#roadmap" },
  { label: "PARTNERS", href: "#partners" },
  { label: "TEAM & ADVISORS", href: "#team" },
  { label: "SUBSCRIBE", href: "#subscribe" },
];
