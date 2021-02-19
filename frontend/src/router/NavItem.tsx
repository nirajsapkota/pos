import React, { FC, SVGProps } from "react";

interface NavItemProps {
  icon: SVGProps<SVGSVGElement>,
  href: string
};

const NavItem: FC <NavItemProps> = ({ icon, href }) => {
  return (
    <li className="nav-item">
      <a href={href} className="icon-button">{icon}</a>
    </li>
  );
}

export default NavItem;