import React, { FC, SVGProps } from "react";
import { useLocation } from "react-router-dom";

interface NavItemWideProps {
  icon: SVGProps<SVGSVGElement>,
  href: string
};

const NavItemWide: FC<NavItemWideProps> = ({ icon, href }) => {

  const { pathname } = useLocation();
  var classes;
  
  /* Make it so the active tab is highlighted in a different colour,
   * any pages within a tab should be highlighted i.e. the tab for
   * /neworder should remain highlighted within /neworder/dinein,
   * however the main page is highlighted if we use .includes() as
   * every pathname includes '/' so we have to check '/' separately.
   */
  if (href === "/")
    classes = pathname === href ? "nav-item-wide active" : "nav-item-wide";
  else if (href !== "/")
    classes = pathname.includes(href) ? "nav-item-wide active" : "nav-item-wide";

  return (
    <li className={classes}>
      <a href={href} className="icon-button-wide">{icon}</a>
    </li>
  );
}

export default NavItemWide;