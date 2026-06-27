"use client";

import { useId } from "react";

export default function Logo({
  height = 36,
  opacity = 1,
}: {
  height?: number;
  opacity?: number;
}) {
  const gid = "if-" + useId().replace(/:/g, "");
  const width = (height * 256) / 298;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Igor Freitas"
      style={{ display: "block", opacity }}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfcfcf" />
          <stop offset="0.22" stopColor="#f2f2f2" />
          <stop offset="0.5" stopColor="#8d8d8d" />
          <stop offset="0.72" stopColor="#a6a6a6" />
          <stop offset="1" stopColor="#dcdcdc" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gid})`}>
        <rect x="40" y="58" width="112" height="12" />
        <rect x="46" y="72" width="100" height="5" />
        <rect x="50" y="81" width="15" height="138" />
        <rect x="69" y="81" width="15" height="138" />
        <rect x="88" y="81" width="15" height="138" />
        <rect x="107" y="81" width="15" height="138" />
        <rect x="126" y="81" width="15" height="138" />
        <rect x="46" y="223" width="100" height="5" />
        <rect x="40" y="228" width="112" height="12" />
        <rect x="140" y="44" width="24" height="210" />
        <rect x="140" y="44" width="76" height="20" />
        <rect x="140" y="138" width="58" height="18" />
        <rect x="134" y="44" width="36" height="6" />
        <rect x="210" y="44" width="6" height="24" />
        <rect x="132" y="246" width="40" height="8" />
      </g>
    </svg>
  );
}
