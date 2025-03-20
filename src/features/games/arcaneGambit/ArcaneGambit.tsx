"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSkull, FaHeart } from "react-icons/fa";
import "@/styles/games/_arcaneGambit.scss";

const MAX_HEALTH = 100;

type CardType = "attack" | "defense" | "heal" | "hex" | "arcaneSurge";
type Card = { type: CardType; value: number; effect?: string };

const generateRandomCard = (): Card => {
  const cardTypes: CardType[] = ["attack", "defense", "heal", "hex", "arcaneSurge"];
  const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];

  switch (randomType) {
    case "attack":
      return { type: "attack", value: Math.floor(Math.random() * 15) + 5 };
    case "defense":
      return { type: "defense", value: Math.floor(Math.random() * 10) + 5 };
    case "heal":
      return { type: "heal", value: Math.floor(Math.random() * 20) + 10 };
    case "hex":
      return { type: "hex", value: 5, effect: "Poison -5 HP per turn!" };
    case "arcaneSurge":
      return { type: "arcaneSurge", value: 30, effect: "A massive surge of energy!" };
    default:
      return { type: "attack", value: 10 };
  }
};

export const ArcaneGambit = () => {
  const [playerHP, setPlayerHP] = useState(MAX_HEALTH);
  const [aiHP, setAiHP] = useState(MAX_HEALTH);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [aiSelectedCard, setAiSelectedCard] = useState<Card | null>(null);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [damageEffect, setDamageEffect] = useState<string | null>(null);

  const handleCardFlip = () => {
    if (isGameOver) return;

    const card = generateRandomCard();
    setSelectedCard(card);

    setTimeout(() => {
      applyCardEffect(card, true);
      setPlayerTurn(false);

      setTimeout(() => {
        const aiCard = generateRandomCard();
        setAiSelectedCard(aiCard);
        applyCardEffect(aiCard, false);
        setPlayerTurn(true);
      }, 1500);
    }, 1000);
  };

  const applyCardEffect = (card: Card, isPlayer: boolean) => {
    if (isPlayer) {
      if (card.type === "attack") {
        setAiHP((prev) => Math.max(prev - card.value, 0));
        setDamageEffect("ai");
      }
      if (card.type === "heal") setPlayerHP((prev) => Math.min(prev + card.value, MAX_HEALTH));
      if (card.type === "hex") setAiHP((prev) => Math.max(prev - card.value, 0));
    } else {
      if (card.type === "attack") {
        setPlayerHP((prev) => Math.max(prev - card.value, 0));
        setDamageEffect("player");
      }
      if (card.type === "heal") setAiHP((prev) => Math.min(prev + card.value, MAX_HEALTH));
      if (card.type === "hex") setPlayerHP((prev) => Math.max(prev - card.value, 0));
    }

    setTimeout(() => setDamageEffect(null), 1000);
  };

  useEffect(() => {
    if (playerHP <= 0 || aiHP <= 0) setIsGameOver(true);
  }, [playerHP, aiHP]);

  return (
    <section className="arcane-gambit-container">
      <h2 className="game-title">⚔ Arcane Gambit ⚔</h2>

      {/* Health Bars */}
      <div className="health-bars">
        <div className="player-health">
          <FaHeart className="heart-icon" />
          <div className="health-bar">
            <motion.div className="health-fill" animate={{ width: `${playerHP}%` }} />
          </div>
          <span>{playerHP} HP</span>
        </div>

        <div className="ai-health">
          <FaSkull className="skull-icon" />
          <div className="health-bar">
            <motion.div className="health-fill ai" animate={{ width: `${aiHP}%` }} />
          </div>
          <span>{aiHP} HP</span>
        </div>
      </div>

      {/* Card Section */}
      <div className="card-area">
        {selectedCard && (
          <motion.div
            className={`card ${selectedCard.type}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p>{selectedCard.type.toUpperCase()}</p>
            <span>
              {selectedCard.value} {selectedCard.effect && <small>{selectedCard.effect}</small>}
            </span>
          </motion.div>
        )}
      </div>

      {/* AI Card Section */}
      {aiSelectedCard && (
        <motion.div
          className={`ai-card ${aiSelectedCard.type}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p>{aiSelectedCard.type.toUpperCase()}</p>
          <span>
            {aiSelectedCard.value} {aiSelectedCard.effect && <small>{aiSelectedCard.effect}</small>}
          </span>
        </motion.div>
      )}

      {/* Floating Damage Effects */}
      <AnimatePresence>
        {damageEffect === "player" && (
          <motion.div
            className="damage-effect player"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
          >
            -{aiSelectedCard?.value} HP
          </motion.div>
        )}
        {damageEffect === "ai" && (
          <motion.div
            className="damage-effect ai"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
          >
            -{selectedCard?.value} HP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Over */}
      {isGameOver ? (
        <div className="game-over">
          <h3>{playerHP > 0 ? "🎉 Victory!" : "💀 Defeat!"}</h3>
          <motion.button
            className="reset-button"
            onClick={() => window.location.reload()}
            whileTap={{ scale: 0.9 }}
          >
            Play Again
          </motion.button>
        </div>
      ) : (
        <motion.button
          className="flip-card-button"
          onClick={handleCardFlip}
          whileTap={{ scale: 0.9 }}
          disabled={!playerTurn}
        >
          Flip a Card
        </motion.button>
      )}
    </section>
  );
};
