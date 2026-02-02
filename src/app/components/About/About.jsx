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
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.inView);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function About() {
  const textRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);

  useInView(textRef);
  useInView(trustRef);
  useInView(ctaRef);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* ================= STORY ================= */}
        <div className={styles.storyGrid}>
          <div ref={textRef} className={styles.reveal}>
            <span className={styles.kicker}>Our Philosophy</span>

            <h2 className={styles.title}>
              Modern Problems Need <span>Modern Surfaces</span>
            </h2>

            <p className={styles.desc}>
              HexaLam was created to challenge outdated laminate standards.
              We focus exclusively on high-gloss acrylic surfaces engineered
              using contemporary pressing techniques and strict quality control.
              The result is cleaner finishes, improved colour stability,
              and long-term performance for modern interiors.
            </p>
          </div>

          {/* ================= 3D ACRYLIC SHEET ================= */}
          <div className={styles.visualWrapper}>
            <motion.div
              className={styles.floatingSheet}
              animate={{
                rotateY: [0, 15, 0],
                rotateX: [8, -8, 8],
                y: [0, -15, 0],
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

        {/* ================= TRUST ================= */}
        <div ref={trustRef} className={`${styles.trustSection} ${styles.reveal}`}>
          <div className={styles.trustHeader}>
            <h3>The HexaLam Standard</h3>
            <p>Built for real-world interiors, not showroom samples.</p>
          </div>

          <div className={styles.featureGrid}>
            <TrustCard
              icon={<Factory size={22} />}
              title="Precision Manufacturing"
              text="Modern bonding processes ensure consistent gloss, flatness, and surface clarity."
            />
            <TrustCard
              icon={<ShieldCheck size={22} />}
              title="6H Surface Hardness"
              text="Engineered to resist micro-scratches from daily use."
            />
            <TrustCard
              icon={<Zap size={22} />}
              title="UV Stable Polymers"
              text="Formulated to maintain colour consistency in sunlit spaces."
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div ref={ctaRef} className={`${styles.aboutCTA} ${styles.reveal}`}>
          <Link href="/laminates/acrylic" className={styles.ctaBtn}>
            View Acrylic Laminates
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