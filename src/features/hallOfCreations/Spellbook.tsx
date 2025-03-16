"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Button } from "primereact/button";
import "@/styles/_spellbook.scss";

const pages = [
  { title: "🔥 The Magic Scroll", content: "A seamless, parallax scroll experience." },
  { title: "✨ The Arcane Tooltip", content: "Hover to reveal hidden messages." },
  { title: "🧙‍♂️ The Wizard’s Button", content: "A glowing button with interactive effects." },
  { title: "📜 The Enchanted Form", content: "A form with smooth animations & magical UI." },
];

export const Spellbook = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const nextPage = () => {
    setDirection(1); // Flip right
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setDirection(-1); // Flip left
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPage, // Flip forward (right)
    onSwipedRight: prevPage, // Flip backward (left)
    touchEventOptions: { passive: false },
    trackMouse: true,
  });

  return (
    <div className="spellbook-container" {...handlers}>
      <div className="spellbook">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction === 1 ? 80 : -80,
              rotateY: direction === 1 ? -30 : 30,
            }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{
              opacity: 0,
              x: direction === 1 ? -80 : 80,
              rotateY: direction === 1 ? 30 : -30,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="spellbook-page"
          >
            <div className="sparkling-bg" />
            <div className="page-content">
              <h2 className="spellbook-title">{pages[page].title}</h2>
              <p className="spellbook-content">{pages[page].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="spellbook-controls">
        <Button
          icon="pi pi-angle-left"
          className="p-button-rounded spellbook-btn"
          onClick={prevPage}
        />
        <Button
          icon="pi pi-angle-right"
          className="p-button-rounded spellbook-btn"
          onClick={nextPage}
        />
      </div>
    </div>
  );
};
