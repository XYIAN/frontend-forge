"use client";

import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Link from "next/link";
import { NavLink } from "../common";
import { NAV_MENU } from "@/constants/NAV_MENU";
import { SmLinkPrimary } from "../socialMediaLinks";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export function NavBar() {
  const [visible, setVisible] = useState(false);
  const menubarItems: MenuItem[] | undefined = NAV_MENU.map((item) => ({
    label: item.label,
    url: item.route,
  }));
  return (
    <header className="surface-ground px-4 py-3 flex align-items-center justify-content-between shadow-2 sticky-header">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        Frontend Forge
      </Link>

      {/* Hamburger Button (Mobile) */}
      <Button
        icon="pi pi-bars"
        className="p-button-rounded p-button-text lg:hidden"
        onClick={() => setVisible(true)}
      />

      {/* Sidebar (Mobile Navigation) */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="sidebar-container relative"
        //dismissable
      >
        <nav className="flex flex-column gap-3 p-4">
          {NAV_MENU.map((item) => (
            <NavLink
              label={item.label}
              key={`link_to_${item.label}_mobile`}
              route={item.route}
              onClick={() => setVisible(false)}
            />
          ))}
        </nav>
        {/* Social Icons */}
        <SmLinkPrimary />
      </Sidebar>

      {/* Full Navbar (Shown on Larger Screens) */}
      {/* <nav className="hidden lg:flex gap-4">
        {NAV_MENU.map((item) => (
          <NavLink label={item.label} key={`link_to_${item.label}_desktop`} route={item.route} />
        ))}
      </nav> */}

      {/* ? PrimeReact Menubar (Desktop) */}
      <nav className="hidden lg:block w-full max-w-lg">
        <Menubar
          model={menubarItems}
          className="shadow-none bg-transparent border-none text-white flex justify-content-end align-items-center"
        />
      </nav>
    </header>
  );
}
