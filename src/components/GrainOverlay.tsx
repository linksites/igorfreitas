"use client";

export default function GrainOverlay() {
  const noise = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`,
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        opacity: 0.04,
        mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml,${noise}")`,
        pointerEvents: "none",
      }}
    />
  );
}
