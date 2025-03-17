"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/_mysticCard.scss";

export const MysticCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`mystic-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      whileTap={{ scale: 0.97 }}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <h3>🔮 Mystic Card</h3>
          <p>Tap or hover to reveal its secrets...</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <h3>✨ Secret Revealed!</h3>
          <p>The magic is within you!</p>
        </div>
      </div>
    </motion.div>
  );
};
