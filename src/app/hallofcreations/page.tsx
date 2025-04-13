import {
  Spellbook,
  MagicScroll,
  MysticCard,
  ArcaneTooltip,
  ShadowDropdown,
  PhantomModal,
  SpellbindingSlider,
  ArcaneToggle,
  GlowingInput,
  ElementalTabs,
  SigilGenerator,
  TimePortal,
  MysteryBox,
  WizardDice,
  RuneTimeline,
  DimensionalFooter,
  // ForgedNavbar,
} from "@/features";
import { WizardButton } from "@/features/hallOfCreations/WizardButton";
import "@/styles/_spellbook.scss";
export default function HallOfCreations()     {
  return (
    <div className="hall-container text-center">
      <h1 className="hall-title">The Hall of Creations</h1>
      <p className="hall-subtitle">Explore enchanted UI components.</p>

      {/* The Spellbook Interactive Section */}
      <Spellbook />
      <MagicScroll />
      <WizardButton />
      <MysticCard />
      <ArcaneTooltip />
      <ShadowDropdown />
      <PhantomModal />
      <SpellbindingSlider />
      <ArcaneToggle />
      {/* <ForgedNavbar /> */}
      <GlowingInput />
      <ElementalTabs />
      <SigilGenerator />
      <TimePortal />
      <MysteryBox />
      <WizardDice />
      <RuneTimeline />
      <DimensionalFooter />
    </div>
  );
}
