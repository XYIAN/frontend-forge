"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/_mysticCard.scss";

export const MysticCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`mystic-card-container`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={`mystic-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        whileTap={{ scale: 0.97 }}
      >
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <h3>🔮 Mystic Card</h3>
            <p>This Card holds a hidden truth… Tap to unveil it!</p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <h3>💡</h3>
            <p> A true wizard’s power lies in their creativity!</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
