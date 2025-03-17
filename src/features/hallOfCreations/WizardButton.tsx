"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import "@/styles/_wizardButton.scss";

export const WizardButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="wizard-button-container"
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Button
        label={isClicked ? "? Spell Activated!" : "?? Cast a Spell"}
        className="wizard-button"
      />
      <div className="glow-effect" />
    </motion.div>
  );
};
