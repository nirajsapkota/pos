import React, { FC } from "react"

import Navbar from "./Navbar"
import NavbarBrand from "./NavbarBrand"
import NavbarSection from "./NavbarSection"
import NavItem from "./NavItem"
import NavItemWide from "./NavItemWide"

import { ReactComponent as BrandIcon } from "../assets/icons/brand.svg"

import { ReactComponent as HomeIcon } from "../assets/icons/home.svg"
import { ReactComponent as AddIcon } from "../assets/icons/add.svg"
import { ReactComponent as DineInIcon } from "../assets/icons/dine-in.svg"
import { ReactComponent as TakeawayIcon } from "../assets/icons/takeaway.svg"
import { ReactComponent as DeliveryIcon } from "../assets/icons/delivery.svg"
// import { ReactComponent as ReservationsIcon } from "../assets/icons/reservations.svg"

// import { ReactComponent as SalesIcon } from "../assets/icons/sales.svg"
import { ReactComponent as EmployeesIcon } from "../assets/icons/employees.svg"
import { ReactComponent as CaretDownIcon } from "../assets/icons/caret-down.svg"

const Router: FC = () => {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarBrand name="POSimple" icon={<BrandIcon />} />
      </NavbarSection>

      <NavbarSection>
        <NavItemWide icon={<HomeIcon />} href="/" />
        <NavItemWide icon={<AddIcon />} href="/neworder" />
        <NavItemWide icon={<DineInIcon />} href="/dineins" />
        <NavItemWide icon={<TakeawayIcon />} href="/takeaways" />
        <NavItemWide icon={<DeliveryIcon />} href="/deliveries" />
      </NavbarSection>

      <NavbarSection>
        {/* <NavItem icon={<SalesIcon />} href="/sales" /> */}
        <NavItem icon={<EmployeesIcon />} href="/employees" />
        <NavItem icon={<CaretDownIcon />} href="/menumaker" />
      </NavbarSection>
    </Navbar>
  )
}

export default Router