"use client";

import { motion } from "framer-motion";
import { RUNE_TIMELINE } from "@/constants";
import "@/styles/_runeTimeline.scss";

export const RuneTimeline = () => {
  return (
    <div className="rune-timeline-container">
      <div className="timeline-line" />
      {RUNE_TIMELINE.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="rune-icon">🔮</div>
          <div className="event-content">
            <h3>
              {event.day} - {event.title}
            </h3>
            <p>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
