"use client";

import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Link from "next/link";

export function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="w-full px-4 py-3 flex align-items-center justify-content-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Frontend Forge
      </Link>

      {/* Hamburger Button (Mobile) */}
      <Button
        icon="pi pi-bars"
        className="p-button-rounded p-button-text lg:hidden"
        onClick={() => setVisible(true)}
      />

      {/* Sidebar (Mobile Navigation) */}
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="right">
        <nav className="flex flex-column gap-4 p-4">
          <Link href="/" className="text-lg hover:text-blue-500" onClick={() => setVisible(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-blue-500"
            onClick={() => setVisible(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-lg hover:text-blue-500"
            onClick={() => setVisible(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-blue-500"
            onClick={() => setVisible(false)}
          >
            Contact
          </Link>
        </nav>
      </Sidebar>

      {/* Full Navbar (Shown on Larger Screens) */}
      <nav className="hidden lg:flex gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/projects" className="hover:text-gray-300">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>
    </header>
  );
}
