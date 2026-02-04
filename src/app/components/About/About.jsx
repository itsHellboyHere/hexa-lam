"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, ShieldCheck, Zap } from "lucide-react";
import styles from "./About.module.css";

/* ===============================
   INTERSECTION OBSERVER HOOK
================================ */
function useInView(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.inView);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  const storyRef = useRef(null);
  const trustRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useInView(storyRef);
  useInView(trustRef);
  useInView(statsRef);
  useInView(ctaRef);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* ================= STORY GRID ================= */}
        <div ref={storyRef} className={`${styles.storyGrid} ${styles.reveal}`}>
          <div className={styles.leftContent}>
            <span className={styles.kicker}>About HexaLam</span>

            <h2 className={styles.title}>
              Redefining Interiors With <span>Acrylic Excellence</span>
            </h2>

            <p className={styles.desc}>
              HEXALAM Acrylic Laminates is a premium surface solution brand committed
              to redefining modern interiors through innovation, durability, and
              refined aesthetics. Designed for those who seek elegance without
              compromise, HEXALAM combines cutting-edge acrylic technology with
              contemporary design to create surfaces that truly stand out.
            </p>
          </div>

          <div className={styles.visualWrapper}>
            <motion.div
              className={styles.floatingSheet}
              animate={{
                rotateY: [0, 15, 0],
                rotateX: [8, -8, 8],
                y: [0, -14, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.sheetThickness} />
              <div className={styles.sheetFace}>
                <div className={styles.acrylicSurface}>
                  <div className={styles.surfaceGrain} />
                </div>
                <img src="/logo.png" alt="HexaLam" className={styles.logoBadge} />
                <div className={styles.glossReflect} />
                <div className={styles.edgeHighlight} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= TRUST SECTION ================= */}
        <div ref={trustRef} className={`${styles.trustSection} ${styles.reveal}`}>
          <div className={styles.trustHeader}>
<h3>The HEXALAM Standard</h3>
<p>Engineered for performance, designed for modern living.</p>
          </div>

          <div className={styles.featureGrid}>
            <TrustCard
              icon={<Factory size={24} />}
title="Precision Engineering"
text="Each acrylic laminate is manufactured with strict process control to deliver exceptional clarity, uniform gloss, and long-lasting performance."
            />
            <TrustCard
              icon={<ShieldCheck size={24} />}
title="Scratch & Impact Resistant"
text="High surface hardness ensures resistance against daily wear, scratches, and impact in high-traffic interior applications."
            />
            <TrustCard
              icon={<Zap size={24} />}
title="UV & Moisture Resistant"
text="Engineered to retain colour brilliance and surface integrity even in sunlit, humid, and demanding environments."
            />
          </div>

          {/* ================= STATS BAR ================= */}
<div ref={statsRef} className={`${styles.statsBar} ${styles.reveal}`}>
  <StatItem number="High-Gloss" label="Acrylic Finish" />
  <div className={styles.divider} />
  <StatItem number="UV +" label="Colour Stability" />
  <div className={styles.divider} />
  <StatItem number="Scratch" label="Resistant Surface" />
</div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div ref={ctaRef} className={`${styles.aboutCTA} ${styles.reveal}`}>
          <Link href="/laminates/acrylic-laminates" className={styles.ctaBtn}>
            Explore Acrylic Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustCard({ icon, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardGloss} />
      <div className={styles.cardContent}>
        <div className={styles.iconBox}>{icon}</div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function StatItem({ number, label }) {
  return (
    <div className={styles.statItem}>
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}