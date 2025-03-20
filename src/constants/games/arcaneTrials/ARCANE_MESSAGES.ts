export type ArcaneMessage = {
  button: string[];
};

export interface ArcaneSuccessMessage extends ArcaneMessage {
  swipe: { left: string[]; right: string[]; up: string[]; down: string[] };
}

export interface ArcaneFailureMessage extends ArcaneMessage {
  left: string[];
  right: string[];
  down: string[];
  up: string[];
}

export const SUCCESS_MESSAGES: ArcaneSuccessMessage = {
  button: [
    "Your incantation radiates power!",
    "A surge of energy courses through the air!",
    "The arcane forces embrace your spell!",
    "The runes glow with approval!",
    "A successful cast! The energies resonate!",
    "The ether pulses with newfound strength!",
    "Your words echo through the aether!",
    "A perfect spell—weaving complete!",
    "The magic bends to your will!",
    "The elements align, empowering your spell!",
  ],
  swipe: {
    left: [
      "Your leftward motion bends the winds to your will!",
      "A precise leftward incantation! The spell ignites!",
      "The energies swirl leftward, aligning perfectly!",
      "A gust of mystical force answers your call!",
      "The left-hand path holds secrets untold!",
    ],
    right: [
      "A rightward flourish channels pure power!",
      "You carve a path through the arcane ether!",
      "The spell dances rightward, forming sigils of strength!",
      "A mystical surge follows your command!",
      "The rightward winds whisper in your favor!",
    ],
    up: [
      "Your upwards swipe channels divine energy!",
      "The sigils align as you command the energies skyward!",
      "A powerful surge upwards! The magic flows effortlessly!",
      "A celestial force empowers your incantation!",
      "The heavens acknowledge your mastery!",
    ],
    down: [
      "You push energy downward, stabilizing the arcane currents!",
      "A downward cast seals the spell with mystical precision!",
      "The magic settles into the foundation of the ether!",
      "A steady pulse of energy grounds your spell!",
      "The roots of power deepen beneath your feet!",
    ],
  },
};

export const FAILURE_MESSAGES: ArcaneFailureMessage = {
  left: [
    "The energies recoil—leftward is not the path!",
    "Your leftward motion falters, disrupting the weave!",
    "The arcane forces twist in rejection!",
    "A misaligned gesture warps the incantation!",
    "Your control slips—the leftward flow collapses!",
  ],
  right: [
    "The forces shudder—rightward was the wrong path!",
    "Your rightward gesture disrupts the harmony!",
    "The spell resists—adjust your casting technique!",
    "A flickering pulse—rightward does not hold the answer!",
    "Your incantation veers off course!",
  ],
  down: [
    "The magic drains into the void—downward is a path to ruin!",
    "The ether does not flow downward—only into the abyss!",
    "A flawed spell collapses under its own weight!",
    "Dark forces consume your failed invocation!",
    "The energies scatter into the depths, lost forever!",
  ],
  up: [
    "The energies refuse your gesture—something is off!",
    "Upward was a misstep—the forces reject your call!",
    "The heavens deny your request, try again!",
    "A flickering misfire—the sky does not answer!",
    "Your reach exceeds your grasp—the magic recoils!",
  ],
  button: [
    "The spell resists your invocation!",
    "A misaligned force disrupts your magic!",
    "Your energy is out of sync—try again!",
    "The ether flickers, but refuses to obey!",
    "Something is amiss—your spell fizzles!",
    "A weak pulse—the arcane forces remain dormant!",
    "Your words lack conviction—the spell crumbles!",
    "The incantation falters, slipping into nothingness!",
    "The aether shudders—your grasp is unsteady!",
    "Your command falters—the energies scatter!",
  ],
};
