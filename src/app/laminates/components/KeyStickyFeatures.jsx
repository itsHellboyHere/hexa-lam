"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../css/KeyFeatures.module.css";
import { Factory, ShieldCheck, Zap, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: Factory,
    title: "Precision Manufacturing",
    desc: "Controlled pressing and calibrated bonding ensure uniform gloss, flatness, and edge consistency."
  },
  {
    icon: ShieldCheck,
    title: "Scratch Resistant",
    desc: "Resistant to micro-scratches from daily use and routine cleaning."
  },
  {
    icon: Zap,
    title: "Stain Resistant",
    desc: "Maintains colour clarity and gloss in sun-exposed interiors."
  },
  {
    icon: Layers,
    title: "Moisture-Resistant Core",
    desc: "Suitable for kitchens, wardrobes, and interior furniture applications."
  }
];

export default function KeyStickyFeatures() {
  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(v => [...new Set([...v, entry.target])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.sticky}>
          <span className={styles.kicker}>Key Features</span>
          <h2 className={styles.title}>
            Engineered for<br />Modern Interiors
          </h2>
        </div>

        {/* RIGHT */}
        <div className={styles.list}>
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={el => (itemsRef.current[i] = el)}
                className={`${styles.item} ${
                  visible.includes(itemsRef.current[i]) ? styles.visible : ""
                }`}
              >
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}