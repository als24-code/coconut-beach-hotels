"use client";

import { useEffect, useRef, useState } from "react";

const formatNumber = (value) => {
  if (value >= 1_000_000) {
    const formatted = value / 1_000_000;
    return `${Number.isInteger(formatted) ? formatted : formatted.toFixed(1)}M`;
  }

  if (value >= 1_000) {
    const formatted = value / 1_000;
    return `${Number.isInteger(formatted) ? formatted : formatted.toFixed(1)}k+`;
  }

  return value.toString();
};

export default function StatInstance({
  value,
  duration = 2000,
  suffix = "",
  className = "",
}) {
  const [count, setCount] = useState(0);
  const raf = useRef();

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);

      setCount(Math.round(progress * value));

      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
