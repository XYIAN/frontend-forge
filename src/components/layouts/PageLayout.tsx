"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (To Be Created Later) */}
      <main className="flex-grow">{children}</main>
      {/* Footer (To Be Created Later) */}
    </div>
  );
}