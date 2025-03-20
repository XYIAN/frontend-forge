"use client";

import "@/styles/thegranddesign/_spellArchitect.scss";

export const SpellArchitect = () => {
  return (
    <section className="spell-architect">
      <div className="arcane-frame">
        <h2>The Architect of Spells & Structure</h2>
        <p>
          A true wizard does not simply cast spells at random—each incantation, every component, is
          meticulously structured. The forge of creation is built upon **solid foundations, modular
          design, and arcane precision.**
        </p>
      </div>

      {/* Floating blueprint glyphs */}
      <span className="glyph glyph-1">⌖</span>
      <span className="glyph glyph-2">⌬</span>
      <span className="glyph glyph-3">⚛</span>
      <span className="glyph glyph-4">✦</span>
    </section>
  );
};
