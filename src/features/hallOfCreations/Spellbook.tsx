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
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPage, // Swiping left flips forward
    onSwipedRight: prevPage, // Swiping right flips backward
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
            initial={{ opacity: 0, rotateY: direction === 1 ? -150 : 150 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: direction === 1 ? 150 : -150 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
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
