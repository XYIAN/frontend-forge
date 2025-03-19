"use client";

import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "@/styles/_elementalTabs.scss";

export const ElementalTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleButtonClick = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 1000); // Reset animation after 1s
  };

  return (
    <div className="showcase-item elemental-tabs-container">
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {/* Fire Tab 🔥 */}
        <TabPanel header="🔥 Fire">
          <div className={`tab-content fire-tab ${animating ? "fire-effect" : ""}`}>
            <h2>Unleash the Inferno</h2>
            <p>The flames of creation burn bright. Tap to ignite!</p>
            <button className="element-button fire-button" onClick={handleButtonClick}>
              🔥 Ignite
            </button>
          </div>
        </TabPanel>

        {/* Water Tab 🌊 */}
        <TabPanel header="🌊 Water">
          <div className={`tab-content water-tab ${animating ? "water-effect" : ""}`}>
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <h2>Embrace the Flow</h2>
            <p>Water adapts to all forms. Tap to create ripples!</p>
            <button className="element-button water-button" onClick={handleButtonClick}>
              💧 Ripple
            </button>
          </div>
        </TabPanel>

        {/* Earth Tab 🌿 */}
        <TabPanel header="🌿 Earth">
          <div className={`tab-content earth-tab ${animating ? "earth-effect" : ""}`}>
            <h2>Harness the Foundation</h2>
            <p>Solid as stone, yet ever-growing. Tap to shake the ground!</p>
            <button className="element-button earth-button" onClick={handleButtonClick}>
              🌱 Tremor
            </button>
          </div>
        </TabPanel>

        {/* Air Tab ⚡ */}
        <TabPanel header="⚡ Air">
          <div className={`tab-content air-tab ${animating ? "air-effect" : ""}`}>
            <h2>Master the Winds</h2>
            <p>The invisible force that shapes worlds. Tap to summon a gust!</p>
            <button className="element-button air-button" onClick={handleButtonClick}>
              🌬️ Gust
            </button>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};
