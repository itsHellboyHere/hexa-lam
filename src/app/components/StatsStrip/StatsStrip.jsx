"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsStrip.module.css";

const STATS = [
  { label: "Surface Hardness", value: 6, suffix: "H" },
  { label: "High Gloss Finish", value: 100, suffix: "%" },
  { label: "UV Colour Stability", value: 100, suffix: "%" },
  { label: "Daily Use Rated", value: 24, suffix: "×7" },
];

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();
        const duration = 1000;

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsStrip() {
  return (
    <section className={styles.strip}>
      <div className={styles.inner}>
        <span className={styles.kicker}>Material Specifications</span>

        <div className={styles.grid}>
          {STATS.map((item, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.number}>
                <AnimatedNumber value={item.value} />
                <span className={styles.suffix}>{item.suffix}</span>
              </div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}