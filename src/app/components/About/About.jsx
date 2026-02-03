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
            <span className={styles.kicker}>Our Philosophy</span>
            <h2 className={styles.title}>
              Modern Problems Need <span>Modern Surfaces</span>
            </h2>
            <p className={styles.desc}>
              HexaLam was created to challenge outdated laminate standards.
              We focus exclusively on high-gloss acrylic surfaces engineered
              using contemporary pressing techniques and strict quality control.
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
            <h3>The HexaLam Standard</h3>
            <p>Built for real-world interiors, not showroom samples.</p>
          </div>

          <div className={styles.featureGrid}>
            <TrustCard
              icon={<Factory size={24} />}
              title="Precision Manufacturing"
              text="Controlled pressing and calibrated bonding ensure uniform gloss and flatness."
            />
            <TrustCard
              icon={<ShieldCheck size={24} />}
              title="6H Surface Hardness"
              text="Designed to resist micro-scratches from daily interior use."
            />
            <TrustCard
              icon={<Zap size={24} />}
              title="UV Stable Polymers"
              text="Maintains colour clarity even in sun-exposed spaces."
            />
          </div>

          {/* ================= STATS BAR ================= */}
          <div ref={statsRef} className={`${styles.statsBar} ${styles.reveal}`}>
            <StatItem number="100+" label="Global Textures" />
            <div className={styles.divider} />
            <StatItem number="6H" label="Hardness Rating" />
            <div className={styles.divider} />
            <StatItem number="15Yr" label="Warranty" />
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div ref={ctaRef} className={`${styles.aboutCTA} ${styles.reveal}`}>
          <Link href="/laminates/acrylic" className={styles.ctaBtn}>
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