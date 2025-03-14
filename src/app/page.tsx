"use client";

import { Button } from "primereact/button";
import "@/styles/home.scss";

const DETAILS = {
  title: "The Forge",
  description: "Steel is shaped by flame. Code is shaped by The Forge.",
};

export default function Home() {
  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <div className="home-container">
      <h1 className="hero-title">{DETAILS.title}</h1>
      <p className="hero-subtitle">{DETAILS.description}.</p>
      <Button
        label="View My Work"
        icon="pi pi-arrow-right"
        className="p-button-lg p-button-primary hero-button"
        onClick={handleClick}
      />
    </div>
  );
}
