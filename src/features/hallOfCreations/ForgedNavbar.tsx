"use client";

import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import Link from "next/link";
import "@/styles/_forgedNavbar.scss";
import { NAV_MENU } from "@/constants/NAV_MENU";

export const ForgedNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = NAV_MENU.map((item) => ({
    label: item.label,
    command: () => setMobileMenuOpen(false),
    template: () => (
      <Link href={item.route} className="nav-link">
        {item.label}
      </Link>
    ),
  }));

  return (
    <header className="forged-navbar">
      {/* Desktop Navbar (Menubar) */}
      <nav className="desktop-nav">
        <Menubar
          model={menuItems}
          start={
            <Link href="/" className="nav-logo">
              🔥 The Forge
            </Link>
          }
          className="forged-menubar"
        />
      </nav>

      {/* Mobile Sidebar */}
      <Button
        icon="pi pi-bars"
        className="menu-button lg:hidden"
        onClick={() => setMobileMenuOpen(true)}
      />

      <Sidebar visible={mobileMenuOpen} onHide={() => setMobileMenuOpen(false)} position="right">
        <nav className="mobile-nav">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              label={item.label}
              className="p-button-text"
              onClick={item.command}
            />
          ))}
        </nav>
      </Sidebar>
    </header>
  );
};
