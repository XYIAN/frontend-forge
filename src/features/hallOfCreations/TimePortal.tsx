"use client";

import { motion } from "framer-motion";
import "@/styles/_timePortal.scss";

export const TimePortal = () => {
  return (
    <div className="time-portal-container">
      {/* Outer Glow */}
      <motion.div
        className="portal-glow"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Swirling Inner Portal */}
      <motion.div
        className="portal-core"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Loading Text */}
      <motion.p
        className="portal-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Time Distorting...
      </motion.p>
    </div>
  );
};
