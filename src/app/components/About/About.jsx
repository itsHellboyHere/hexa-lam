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
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  const storyRef = useRef(null);
  const aboutRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);

  useInView(storyRef);
  useInView(aboutRef);
  useInView(trustRef);
  useInView(ctaRef);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* ================= STORY ================= */}
        <div className={styles.storyGrid}>
          <div ref={storyRef} className={styles.reveal}>
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

          {/* ================= 3D ACRYLIC SHEET ================= */}
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

                <img
                  src="/logo.png"
                  alt="HexaLam"
                  className={styles.logoBadge}
                />

                <div className={styles.glossReflect} />
                <div className={styles.edgeHighlight} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= WHO WE ARE ================= */}
        <div ref={aboutRef} className={`${styles.aboutInfo} ${styles.reveal}`}>
          <h3>Who We Are</h3>
          <p>
            HexaLam is a surface solutions brand built for architects,
            interior designers, and builders who demand consistency,
            precision, and long-term performance — not just visual appeal.
          </p>
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
              text="Controlled pressing and calibrated bonding ensure uniform gloss and flatness."
            />
            <TrustCard
              icon={<ShieldCheck size={22} />}
              title="6H Surface Hardness"
              text="Designed to resist micro-scratches from daily interior use."
            />
            <TrustCard
              icon={<Zap size={22} />}
              title="UV Stable Polymers"
              text="Maintains colour clarity even in sun-exposed spaces."
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