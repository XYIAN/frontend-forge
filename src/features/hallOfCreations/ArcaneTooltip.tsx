"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { TOOLTIP_MESSAGES } from "@/constants/TOOLTIP_MESSAGES";
import "@/styles/_arcaneTooltip.scss";

export const ArcaneTooltip = () => {
  const [tooltipMessage, setTooltipMessage] = useState("✨ Hover or tap to reveal magic...");
  const [isMobile, setIsMobile] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Click for Magic");

  // Detect screen size and update button label
  useEffect(() => {
    const updateLabel = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);
      setButtonLabel(isMobileScreen ? "Tap for Magic" : "Click for Magic");
    };

    updateLabel(); // Set initial state
    window.addEventListener("resize", updateLabel);

    return () => window.removeEventListener("resize", updateLabel);
  }, []);

  // Function to get a random tooltip message
  const getRandomMessage = () => {
    return TOOLTIP_MESSAGES[Math.floor(Math.random() * TOOLTIP_MESSAGES.length)];
  };

  // Handle Click/Tap based on device type
  const handleInteraction = () => {
    if (isMobile) {
      // For mobile: Tap changes message AND keeps tooltip visible longer
      setTooltipMessage(getRandomMessage());
    } else {
      // For desktop: Click changes message while still allowing hover effect
      setTooltipMessage(getRandomMessage());
    }
  };

  return (
    <div className="arcane-tooltip-container">
      <Tooltip
        target=".arcane-trigger"
        position="top"
        mouseTrack
        mouseTrackLeft={10}
        showEvent="mouseenter focus"
        hideEvent="mouseleave blur"
        content={tooltipMessage}
      />

      <Button
        className="arcane-trigger p-button-rounded"
        label={buttonLabel}
        onClick={handleInteraction} // ✅ Correctly handles both mobile tap & desktop click
      />
    </div>
  );
};
