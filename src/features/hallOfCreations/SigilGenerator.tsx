"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import "@/styles/_sigilGenerator.scss";

export const SigilGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sigilSeed, setSigilSeed] = useState(Math.random());

  const drawSigil = (ctx: CanvasRenderingContext2D, seed: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = "#00ffff"; // Glowing cyan
    ctx.lineWidth = 2;
    ctx.shadowColor = "#00ffff";
    ctx.shadowBlur = 10;
    ctx.beginPath();

    // Generate random points & connections for a unique sigil
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const numLines = 6 + Math.floor(seed * 6); // 6-12 lines
    const points = [];

    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      const radius = 30 + seed * 50 * Math.random(); // Vary size
      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    }

    // Draw sigil by connecting points
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point, i) => {
      if (i > 0) ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawSigil(ctx, sigilSeed);
    }
  }, [sigilSeed]);

  return (
    <div className="sigil-generator-container">
      <canvas ref={canvasRef} width={200} height={200} className="sigil-canvas" />
      <Button
        label="Summon New Sigil"
        className="sigil-button"
        onClick={() => setSigilSeed(Math.random())}
      />
    </div>
  );
};
