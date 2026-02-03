"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../css/AcrylicKeyFeatures.module.css";
import { Sparkles, Palette, Droplets, Shield, Wind, Leaf } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Ultra High Gloss Finish",
    desc: "A flawless mirror-like surface that brings unmatched depth and clarity to every architectural space."
  },
  {
    icon: Palette,
    title: "Rich & Uniform Colors",
    desc: "Vibrant, deep pigmentation ensures color consistency across every square inch of the laminate sheet."
  },
  {
    icon: Droplets,
    title: "Moisture & Stain Resistant",
    desc: "Non-porous surface technology creates a seamless barrier against liquids and daily kitchen spills."
  },
  {
    icon: Shield,
    title: "Scratch & UV Resistant",
    desc: "High-grade polymer coating protects against micro-scratches and maintains clarity in sun-exposed areas."
  },
  {
    icon: Wind,
    title: "Easy to Maintain",
    desc: "Simple routine cleaning preserves the original gloss for years without the need for specialized polish."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Durable",
    desc: "Sustainably manufactured materials engineered for long-term performance and minimal environmental impact."
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
      { threshold: 0.25 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>

          {/* LEFT: STICKY SIDEBAR */}
          <div className={styles.sticky}>
            <span className={styles.kicker}>The HexaLam Edge</span>
            <h2 className={styles.title}>
              Engineering <span>Luxe</span> <br /> 
              Functional Surfaces
            </h2>
            <p className={styles.stickyDesc}>
              Our acrylic laminates are more than just a finish; they are a multi-layered 
              solution for modern interior challenges.
            </p>
          </div>

          {/* RIGHT: SCROLLABLE LIST */}
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
                  <div className={styles.iconBox}>
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}