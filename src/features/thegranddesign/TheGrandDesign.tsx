"use client";

import "@/styles/theGrandDesign.scss";
import { BirthOfTheForge } from "./BirthOfTheForge";
import { EternalForge } from "./EternalForge";
import { ArcaneMastery } from "./ArcaneMastery";
import { GrandVision } from "./GrandVision";
import { SpellArchitect } from "./SpellArchitect";

export const TheGrandDesign = () => {
  return (
    <main className="the-grand-design">
      <BirthOfTheForge />
      <EternalForge />
      <ArcaneMastery />
      <SpellArchitect />
      <GrandVision />
    </main>
  );
};
