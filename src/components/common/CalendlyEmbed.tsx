"use client";

import { useEffect, useState } from "react";

export const CalendlyEmbed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures this runs only on the client side
  }, []);

  if (!mounted) return null; // Avoids hydration mismatch

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/xyian?hide_gdpr_banner=1&background_color=121212&text_color=00ffff&primary_color=00a3a3"
        style={{
          minWidth: "320px",
          height: "70vh",
          maxWidth: "40rem",
          width: "100%",
          minHeight: "50vh",
          maxHeight: "75vh",
        }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};

export default CalendlyEmbed;
