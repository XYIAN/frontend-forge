"use client";

import "@/styles/home.scss";
import { NavLink } from "@/components";

const DETAILS = {
  title: "The Forge",
  description: "Steel is shaped by flame. Code is shaped by The Forge.",
};

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="hero-title">{DETAILS.title}</h1>
      <p className="hero-subtitle">{DETAILS.description}.</p>
      <NavLink route={"/hallofcreations"} label={"Hall of Creations"} />
      {/* <NavLink route={"/hallofcreations"} label={"The Hall of Creations"} /> */}
    </div>
  );
}
