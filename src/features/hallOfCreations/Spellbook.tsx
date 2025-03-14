"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/_spellbook.scss";

const pages = [
  { title: "?? The Magic Scroll", content: "A seamless, parallax scroll experience." },
  { title: "? The Arcane Tooltip", content: "Hover to reveal hidden messages." },
  { title: "????? The Wizard’s Button", content: "A glowing button with interactive effects." },
  { title: "?? The Enchanted Form", content: "A form with smooth animations & magical UI." },
];

export default function Spellbook() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="spellbook-container">
      <div className="spellbook">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="spellbook-page"
          >
            <h2 className="spellbook-title">{pages[page].title}</h2>
            <p className="spellbook-content">{pages[page].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="spellbook-controls">
        <button onClick={prevPage} className="spellbook-btn">
          ?
        </button>
        <button onClick={nextPage} className="spellbook-btn">
          ?
        </button>
      </div>
    </div>
  );
}
