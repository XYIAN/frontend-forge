"use client";

import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import Background from "./Background";
interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-column">
      {/* Header (To Be Created Later) */}
      <NavBar />
      {/* background parallax */}
      <Background />
      <main className="flex-grow">{children}</main>
      {/* Footer (To Be Created Later) */}
    </div>
  );
}
