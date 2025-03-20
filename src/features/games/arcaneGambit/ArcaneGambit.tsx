"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/games/_arcaneGambit.scss";

export const ArcaneGambit = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);

  const handleCardFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <section className="arcane-gambit-container">
      <h2 className="arcane-gambit-title">✨ The Arcane Gambit ✨</h2>
      <p className="arcane-gambit-instructions">Tap a card to reveal its hidden fate!</p>

      <div className="arcane-card-grid">
        {flippedCards.map((flipped, index) => (
          <motion.div
            key={index}
            className={`arcane-card ${flipped ? "flipped" : ""}`}
            onClick={() => handleCardFlip(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="arcane-card-inner">
              <div className="arcane-card-front">
                <span className="card-symbol">❓</span>
              </div>
              <div className="arcane-card-back">
                <span className="card-symbol">🔮</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
