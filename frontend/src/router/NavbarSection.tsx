import React, { FC } from "react";

const NavbarSection: FC = ({ children }) => {
  return (
    <ul className="navbar-section">{children}</ul>
  );
}

export default NavbarSection;