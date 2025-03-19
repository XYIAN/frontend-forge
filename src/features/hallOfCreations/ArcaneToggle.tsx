"use client";

import { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import "@/styles/_arcaneToggle.scss";

export const ArcaneToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [shake, setShake] = useState(false);

  const handleToggle = (e: InputSwitchChangeEvent) => {
    setIsOn(e.value);

    // Trigger a screen shake effect briefly
    if (e.value) {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  };

  return (
    <div className={`arcane-toggle-container ${shake ? "shake" : ""}`}>
      <h2 className="toggle-title">⚡ Harness the Arcane</h2>

      <div className={`arcane-toggle-wrapper ${isOn ? "active" : ""}`}>
        <InputSwitch checked={isOn} onChange={handleToggle} className="arcane-toggle" />
        <div className="toggle-aura" />
        <div className="toggle-sparkles" />
      </div>

      <p className="toggle-status">{isOn ? "✨ Magic Unleashed!" : "🔮 Magic Dormant..."}</p>
    </div>
  );
};
