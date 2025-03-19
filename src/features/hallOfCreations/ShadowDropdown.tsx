"use client";

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "@/styles/_shadowDropdown.scss";

const options = [
  { label: "✨ Enchanted Choice", value: "enchanted" },
  { label: "🔥 Arcane Fire", value: "fire" },
  { label: "💨 Shadow Veil", value: "shadow" },
  { label: "🌊 Mystic Wave", value: "wave" },
];

export const ShadowDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-dropdown-container">
      <Dropdown
        value={selectedOption}
        options={options}
        onChange={(e) => setSelectedOption(e.value)}
        onShow={() => setIsOpen(true)}
        onHide={() => setIsOpen(false)}
        placeholder="Select a Spell..."
        className={`shadow-dropdown ${isOpen ? "open" : ""} ${selectedOption ? "selected" : ""}`}
      />
    </div>
  );
};
