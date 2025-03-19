"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { MYSTERY_MESSAGES } from "@/constants/MYSTERY_MESSAGES";
import "@/styles/_mysteryBox.scss";

export const MysteryBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showReset, setShowReset] = useState(false);

  const revealMystery = () => {
    setIsOpen(true);
    setMessage(MYSTERY_MESSAGES[Math.floor(Math.random() * MYSTERY_MESSAGES.length)]);

    // Show reset button after 2 seconds
    setTimeout(() => {
      setShowReset(true);
    }, 2000);
  };

  const resetBox = () => {
    setIsOpen(false);
    setShowReset(false);
    setMessage(""); // Clear message before reopening
  };

  return (
    <div className="mystery-box-container">
      <motion.div
        className={`mystery-box ${isOpen ? "opened" : ""}`}
        initial={{ scale: 1 }}
        animate={{ scale: isOpen ? 1.2 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className="mystery-lid"
          animate={isOpen ? { rotateX: 180, y: -20, opacity: 0 } : { rotateX: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div className="mystery-glow" animate={{ opacity: isOpen ? 1 : 0 }} />

        {!isOpen ? (
          <Button label="Open the Box" className="mystery-button" onClick={revealMystery} />
        ) : (
          <motion.div
            className="mystery-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {message}
          </motion.div>
        )}
      </motion.div>

      {/* Reset Button Positioned Below */}
      {showReset && (
        <motion.button
          className="mystery-reset"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={resetBox}
        >
          Try Your Luck Again?
        </motion.button>
      )}
    </div>
  );
};
