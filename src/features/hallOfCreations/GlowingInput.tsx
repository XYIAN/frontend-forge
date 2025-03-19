"use client";

import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import "@/styles/_glowingInput.scss";

export const GlowingInput = () => {
  const [value, setValue] = useState("");
  const toast = useRef<Toast>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      // Show toast notification
      toast.current?.show({
        severity: "info",
        summary: "✨ Spell Cast!",
        detail: `Casting spell: ${value}`,
        life: 3000,
        className: "spell-toast",
      });

      // Clear input after casting spell
      setValue("");
    }
  };

  return (
    <div className="showcase-item glowing-input-container">
      <Toast ref={toast} position="top-center" />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="glowing-input"
        placeholder="Enter your magic..."
      />
    </div>
  );
};
