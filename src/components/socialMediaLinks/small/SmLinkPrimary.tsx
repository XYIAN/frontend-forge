"use client";

import { Button } from "primereact/button";
import Link from "next/link";
import { Tooltip } from "primereact/tooltip";
import "@/styles/_smLinkPrimary.scss"; // Import styles

const SOCIAL_LINKS = [
  { href: "https://github.com/XYIAN", icon: "pi pi-github", tooltip: "GitHub" },
  { href: "https://linkedin.com/in/kxdilbeck", icon: "pi pi-linkedin", tooltip: "LinkedIn" },
  { href: "https://kyledilbeck.com", icon: "pi pi-info-circle", tooltip: "My Work Website" },
];

export const SmLinkPrimary = () => {
  return (
    <div className="sm-links-container">
      {SOCIAL_LINKS.map((item, index) => (
        <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
          <Button
            icon={item.icon}
            className="p-button-text sm-link-button"
            data-pr-tooltip={item.tooltip}
          />
        </Link>
      ))}
      <Tooltip target=".sm-link-button" />
    </div>
  );
};

export default SmLinkPrimary;
