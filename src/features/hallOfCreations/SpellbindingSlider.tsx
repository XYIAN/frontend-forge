"use client";

import { useState } from "react";
import { Slider } from "primereact/slider";
import "@/styles/_spellbindingSlider.scss";

// Function to calculate a smooth transition from cyan to pink
const getColor = (value: number) => {
  const progress = value / 100; // Convert to a range from 0 to 1
  const r = Math.round(0 + progress * 255); // Increase red for pink transition
  const g = Math.round(255 - progress * 255); // Remove green for a cyan → pink transition
  const b = 255; // Keep blue constant for a neon effect
  return `rgb(${r}, ${g}, ${b})`; // Ensures only cyan → pink colors
};

export const SpellbindingSlider = () => {
  const [value, setValue] = useState<number>(50); // Ensure it's a number

  return (
    <div className="spellbinding-slider-container">
      <h2 className="slider-title" style={{ color: getColor(value) }}>
        🔮 Channel the Magic
      </h2>

      <Slider
        value={value}
        onChange={(e) => setValue(e.value as number)}
        className="spellbinding-slider"
        min={0}
        max={100}
      />

      <p className="slider-value" style={{ color: getColor(value) }}>
        Power Level: {value}%
      </p>

      {/* Apply inline styles dynamically */}
      <div className="dynamic-slider-colors">
        <style>
          {`
            .p-slider-range {
              background: ${getColor(value)} !important;
              box-shadow: 0px 0px 15px ${getColor(value)};
            }
            .p-slider-handle {
              border-color: ${getColor(value)} !important;
              box-shadow: 0px 0px 15px ${getColor(value)};
            }
          `}
        </style>
      </div>
    </div>
  );
};
