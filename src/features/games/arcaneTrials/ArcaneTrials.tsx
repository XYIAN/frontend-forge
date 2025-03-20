"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FaMagic, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "@/styles/games/_arcaneTrials.scss";
import { SUCCESS_MESSAGES, FAILURE_MESSAGES } from "@/constants";

type SpellDirection = "left" | "right" | "down" | "up";
type CastSource = "swipe" | "click";

export const ArcaneTrials = () => {
  const [gameState, setGameState] = useState<"waiting" | "casting" | "success" | "failure">(
    "waiting",
  );
  const [spellDirection, setSpellDirection] = useState<SpellDirection | null>(null);
  //const [castSource, setCastSource] = useState<CastSource | null>(null);
  const [showMessage, setShowMessage] = useState(true);
  const [randomMessage, setRandomMessage] = useState("Swipe or tap to begin your trial...");

  // Correct spell gesture
  const correctSpell: SpellDirection = "up";

  const getRandomMessage = (
    type: "success" | "failure",
    source: CastSource,
    direction?: SpellDirection,
  ) => {
    if (type === "success") {
      if (source === "swipe" && direction && SUCCESS_MESSAGES.swipe[direction]) {
        return SUCCESS_MESSAGES.swipe[direction][
          Math.floor(Math.random() * SUCCESS_MESSAGES.swipe[direction].length)
        ];
      }
      return SUCCESS_MESSAGES.button[Math.floor(Math.random() * SUCCESS_MESSAGES.button.length)];
    }
    if (direction && FAILURE_MESSAGES[direction]) {
      return FAILURE_MESSAGES[direction][
        Math.floor(Math.random() * FAILURE_MESSAGES[direction].length)
      ];
    }
    return "The spell fizzled... Perhaps your will was not strong enough?";
  };

  const startTrial = (source: CastSource) => {
    setGameState("casting");
    //setCastSource(source);
    setShowMessage(false);

    setTimeout(() => {
      const spellSucceeded =
        source === "click" ? Math.random() > 0.5 : spellDirection === correctSpell;

      if (spellSucceeded) {
        setRandomMessage(
          getRandomMessage("success", source, spellDirection ? spellDirection : undefined),
        );
      } else {
        setRandomMessage(getRandomMessage("failure", source, spellDirection || "down"));
      }

      setGameState(spellSucceeded ? "success" : "failure");

      setTimeout(() => setShowMessage(true), 800);
    }, 1500);
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const direction = eventData.dir.toLowerCase() as SpellDirection;
      setSpellDirection(direction);
      startTrial("swipe");
    },
    trackMouse: true,
  });

  return (
    <section className={`arcane-trials-container ${gameState}`} {...handlers}>
      {/* Dynamic Icon */}
      <motion.div
        className="arcane-icon"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {gameState === "success" && <FaCheckCircle className="icon-success" />}
        {gameState === "failure" && <FaTimesCircle className="icon-failure" />}
        {gameState === "waiting" && <FaMagic className="icon-neutral" />}
        {gameState === "casting" && <FaMagic className="icon-casting spin" />}
      </motion.div>

      {/* Animated Title */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={gameState}
          className={`arcane-title ${gameState}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {gameState === "success"
            ? "A Spell Well-Forged!"
            : gameState === "failure"
            ? "The Arcane Forces Reject You"
            : "The Arcane Trials"}
        </motion.h2>
      </AnimatePresence>

      {/* Spellcasting Area */}
      <motion.div
        className="spell-casting-area"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          gameState === "success"
            ? { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 255, 153, 0.9)" }
            : gameState === "failure"
            ? { scale: 0.9, boxShadow: "0px 0px 25px rgba(255, 68, 68, 0.9)" }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {showMessage && (
            <motion.p
              key={gameState}
              className={`spell-message ${gameState}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              {randomMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Sparkles on Success */}
      <AnimatePresence>
        {gameState === "success" && (
          <motion.div className="spell-success-sparkles">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="sparkle"
                initial={{ opacity: 0, y: 20, x: Math.random() * 100 - 50 }}
                animate={{ opacity: 1, y: -100 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trial Button */}
      <motion.button
        className="arcane-button"
        onClick={() => startTrial("click")}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        {gameState === "waiting" ? "Begin Trial" : "Recast the Spell"}
      </motion.button>
    </section>
  );
};
