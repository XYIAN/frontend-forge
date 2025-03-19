"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import { PiArrowDownBold } from "react-icons/pi";
import "@/styles/_magicScroll.scss";

export const MagicScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        <PiArrowDownBold className="scroll-icon" />
      </motion.div>

      <div className="magic-scroll-container">
        <motion.div
          className="scroll-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: scrollY * -0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="scroll-title">The Magic Scroll</h1>
          <p className="scroll-description">A seamless, elegant showcase of frontend sorcery.</p>
        </motion.div>
      </div>

      {/* Scroll to Top Button (Optional) */}
      <ScrollTop className="scroll-top-button" />
    </>
  );
};
