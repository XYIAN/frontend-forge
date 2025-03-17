"use client";

import { FC } from "react";
import { ShowcaseItem } from "@/types/showcaseTypes";
import "@/styles/_showcaseDisplay.scss";

interface ShowcaseDisplayProps {
  item: ShowcaseItem;
}

export const ShowcaseDisplay: FC<ShowcaseDisplayProps> = ({ item }) => {
  const Component = item.component; // Get assigned component (if any)

  return (
    <div className="showcase-container">
      <h2 className="showcase-title">{item.title}</h2>
      <p className="showcase-description">{item.description}</p>

      <div className="showcase-content">
        {Component ? <Component /> : <div className="coming-soon">? Coming Soon ?</div>}
      </div>
    </div>
  );
};
