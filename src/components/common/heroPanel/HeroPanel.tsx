// import { Button } from "primereact/button";
import { Image } from "primereact/image";
import React from "react";

export interface HeroPanelProps {
  title: string;
  subtitle?: string;
  imgSrc?: string;
  colorType?: "primary" | "secondary" | "tertiary";
  //customButton?: string;
}
const HeroPanel = ({ title, subtitle, imgSrc, colorType }: HeroPanelProps) => {
  const HeroSubtitle = () => (subtitle ? <p className="hero-subtitle">{subtitle}</p> : null);
  const HeroImage = () =>
    imgSrc ? <Image src={imgSrc} alt="hero" className="hero-image" /> : null;
  const COLOR_CLASS = colorType ? `hero-panel-${colorType}` : "";
  return (
    <div className={`hero-panel ${COLOR_CLASS}`}>
      <HeroImage />
      <h1 className="hero-title">{title}</h1>
      <HeroSubtitle />
      {/* add custom button from reusable component for a link to kyledilbeck.com  */}
      {/* <Button
        label="View My Work"
        icon="pi pi-arrow-right"
        className="p-button-lg p-button-primary hero-button"
        onClick={handleClick}
      /> */}
    </div>
  );
};

export default HeroPanel;
