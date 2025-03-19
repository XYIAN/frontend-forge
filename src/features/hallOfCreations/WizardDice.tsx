"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import "@/styles/_wizardDice.scss";

export const WizardDice = () => {
  const [roll, setRoll] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 6) + 1);
  const [message, setMessage] = useState<string>("Try to roll a " + targetNumber + "!");

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);
    setMessage("Rolling... 🔮");

    setTimeout(() => {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setRoll(newRoll);
      setRolling(false);

      if (newRoll === targetNumber) {
        setMessage(`✨ Success! You rolled a ${newRoll}!`);
        setTargetNumber(Math.floor(Math.random() * 6) + 1);
      } else {
        setMessage(`❌ You rolled a ${newRoll}, try again!`);
      }
    }, 1500);
  };

  return (
    <div className="wizard-dice-container">
      <p className="challenge-message">{message}</p>

      <motion.div
        className="dice"
        animate={rolling ? { rotate: [0, 360], scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {roll !== null ? <span className="dice-number">{roll}</span> : "🎲"}
      </motion.div>

      <Button label="Roll the Dice" className="roll-button" onClick={rollDice} disabled={rolling} />
    </div>
  );
};
