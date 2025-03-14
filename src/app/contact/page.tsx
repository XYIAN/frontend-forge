"use client";

import "@/styles/contact.scss";
import { CalendlyEmbed } from "@/components";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <CalendlyEmbed />
    </div>
  );
}
