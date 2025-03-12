"use client";

import { Button } from "primereact/button";
import "@/styles/home.scss";

const DETAILS = {
  title: "Welcome to Kyle's Frontend Forge",
  description: "Crafting sleek, modern, and high-performance web experiences.",
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
