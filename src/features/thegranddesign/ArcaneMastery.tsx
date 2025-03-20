"use client";

import "@/styles/thegranddesign/_arcaneMastery.scss";

export const ArcaneMastery = () => {
  return (
    <section className="arcane-mastery">
      <div className="arcane-frame">
        <h2>The Arcane Pursuit of Mastery</h2>
        <p>
          Mastery is an endless pursuit, a forge where the code is refined, reshaped, and reforged.
          Every spell cast, every function written, brings new wisdom. The journey never ends.
        </p>
      </div>

      {/* Floating arcane runes */}
      <span className="rune rune-1">✦</span>
      <span className="rune rune-2">⛧</span>
      <span className="rune rune-3">⚝</span>
      <span className="rune rune-4">✷</span>
    </section>
  );
};
