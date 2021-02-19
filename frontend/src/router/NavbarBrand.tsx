import React, { FC, SVGProps } from "react";

interface NavbarBrandProps {
  icon: SVGProps<SVGSVGElement>,
  name: string
};

const NavbarBrand: FC<NavbarBrandProps> = ({ icon, name }) => {
  return (
    <li className="navbar-brand">
      <a href="/" className="navbar-brand-icon">{icon}</a>
      <input className="order-search" placeholder="Search today's orders..." />
    </li>
  );
}

export default NavbarBrand;