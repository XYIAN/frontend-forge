import { Spellbook, MagicScroll } from "@/features";
import "@/styles/_spellbook.scss";
export const HallOfCreations = () => {
  return (
    <div className="hall-container text-center">
      <h1 className="hall-title">The Hall of Creations</h1>
      <p className="hall-subtitle">Explore enchanted UI components.</p>

      {/* The Spellbook Interactive Section */}
      <Spellbook />
      <MagicScroll />
    </div>
  );
};
export default HallOfCreations;
