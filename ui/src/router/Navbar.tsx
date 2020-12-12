import React, { FC } from "react";

const Navbar: FC = ({ children }) => {
  return (
    <nav className="navbar">
      {children}
    </nav>
  );
}

export default Navbar;