"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/_wizardButton.scss";

export default function WizardButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="wizard-button-wrapper"
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <motion.button
        className={`wizard-button ${isClicked ? "activated" : ""}`}
        whileHover={{ scale: 1.05 }}
      >
        <span className="button-text">{isClicked ? "✨ Spell Activated!" : "🪄 Cast Spell"}</span>

        {/* Sparkles */}
        <div className="sparkles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="sparkle" />
          ))}
        </div>

        {/* Magic Shine */}
        <div className="magic-shine" />

        {/* Centered Click Glow */}
        <div className="click-glow" />
      </motion.button>
    </motion.div>
  );
}
