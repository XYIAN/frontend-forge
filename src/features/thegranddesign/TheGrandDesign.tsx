"use client";

import "@/styles/_thegranddesign.scss";
import { BirthOfTheForge } from "./BirthOfTheForge";
import { EternalForge } from "./EternalForge";
import { ArcaneMastery } from "./ArcaneMastery";
import { GrandVision } from "./GrandVision";

export const TheGrandDesign = () => {
  return (
    <main className="the-grand-design">
      <BirthOfTheForge />
      <EternalForge />
      <ArcaneMastery />
      <GrandVision />
    </main>
  );
};
