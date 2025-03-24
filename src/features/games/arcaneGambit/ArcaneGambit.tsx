"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaMagic, FaSkull, FaBolt } from "react-icons/fa";
import { Button } from "primereact/button";
import "@/styles/games/_arcaneGambit.scss";

type CardType = "attack" | "heal" | "hex";
type CastSource = "player" | "enemy";

interface Card {
  id: number;
  type: CardType;
  value: number;
}

export const ArcaneGambit = () => {
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [enemyAction, setEnemyAction] = useState<string | null>(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameMessage, setGameMessage] = useState("The battle begins! Select a card.");
  //const [difficulty, setDifficulty] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    generatePlayerCards();
  }, []);

  const generateCard = (): Card => {
    const roll = Math.random();
    if (roll < 0.6) {
      return { id: Date.now(), type: "attack", value: Math.floor(Math.random() * 15) + 5 };
    } else if (roll < 0.85) {
      return { id: Date.now(), type: "heal", value: Math.floor(Math.random() * 10) + 5 };
    } else {
      return { id: Date.now(), type: "hex", value: Math.floor(Math.random() * 7) + 3 };
    }
  };

  const generatePlayerCards = () => {
    setPlayerCards([generateCard(), generateCard(), generateCard()]);
  };

  const handleCardSelection = (card: Card) => {
    if (!isPlayerTurn || gameOver) return;
    if (!isLoading) setIsLoading(true);
    setTimeout(() => {
      processAction(card, "player");
      setIsPlayerTurn(false);
      setIsLoading(false);
      setTimeout(() => enemyTurn(), 1500);
    }, 2000);
  };

  const processAction = (card: Card, caster: CastSource) => {
    if (gameOver) return;

    if (caster === "player") {
      if (card.type === "attack") {
        setEnemyHP((prev) => Math.max(prev - card.value, 0));
        setGameMessage(`You attacked for ${card.value} damage!`);
      } else if (card.type === "heal") {
        setPlayerHP((prev) => Math.min(prev + card.value, 100));
        setGameMessage(`You healed for ${card.value} HP!`);
      } else {
        setEnemyHP((prev) => Math.max(prev - card.value, 0));
        setGameMessage(`You cast a hex for ${card.value} damage!`);
      }
    } else {
      if (card.type === "attack") {
        setPlayerHP((prev) => Math.max(prev - card.value, 0));
        setEnemyAction(`Enemy attacked for ${card.value} damage!`);
      } else if (card.type === "heal") {
        setEnemyHP((prev) => Math.min(prev + card.value, 100));
        setEnemyAction(`Enemy healed for ${card.value} HP!`);
      } else {
        setPlayerHP((prev) => Math.max(prev - card.value, 0));
        setEnemyAction(`Enemy cast a hex for ${card.value} damage!`);
      }
    }

    checkGameOver();
  };

  const enemyTurn = () => {
    if (gameOver) return;

    const enemyCard = generateCard();
    setIsLoading(true);
    setTimeout(() => {
      processAction(enemyCard, "enemy");
      setIsPlayerTurn(true);
      setIsLoading(false);
      setTimeout(() => {
        setEnemyAction(null);
        generatePlayerCards();
      }, 1200);
    }, 1000);
  };

  const checkGameOver = () => {
    if (playerHP <= 0) {
      setGameMessage("You have been defeated...");
      setGameOver(true);
    } else if (enemyHP <= 0) {
      setGameMessage("You have vanquished your foe!");
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setPlayerHP(100);
    setEnemyHP(100);
    setIsPlayerTurn(true);
    setGameOver(false);
    setGameMessage("The battle begins! Select a card.");
    generatePlayerCards();
  };

  return (
    <section className={`arcane-gambit-container ${playerHP < 15 ? "low-hp" : ""}`}>
      <h2 className="arcane-title">⚔️ Arcane Gambit ⚔️</h2>

      <div className="battlefield">
        <motion.div className="player-hp" animate={{ scale: playerHP < 15 ? 1.2 : 1 }}>
          <FaHeart className="hp-icon" />
          {playerHP} HP
        </motion.div>

        <motion.div className="enemy-hp" animate={{ scale: enemyHP < 15 ? 1.2 : 1 }}>
          <FaSkull className="hp-icon" />
          {enemyHP} HP
        </motion.div>
      </div>

      <p className="game-message">{gameMessage}</p>

      <AnimatePresence>
        {enemyAction && (
          <motion.div
            className="enemy-action"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {enemyAction}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="card-selection">
        {playerCards.map((card) => (
          <motion.div
            key={card.id}
            className={`game-card ${card.type}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardSelection(card)}
          >
            {card.type === "attack" && <FaBolt className="card-icon" />}
            {card.type === "heal" && <FaHeart className="card-icon" />}
            {card.type === "hex" && <FaMagic className="card-icon" />}
            <p>{card.type.toUpperCase()}</p>
            <span>{card.value}</span>
          </motion.div>
        ))}
      </div>

      {gameOver && <Button label="Play Again" className="restart-button" onClick={resetGame} />}
    </section>
  );
};
