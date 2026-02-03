"use client";

import { motion } from "framer-motion";
import styles from "../css/AcrylicHero.module.css";

export default function AcrylicHero() {
  return (
    <section className={styles.hero}>
      {/* The background image should be a high-gloss kitchen or wardrobe shot */}
      <div className={styles.bg}>
        <img 
          src="/laminates/acrylic-hero.jpg" 
          alt="Premium Acrylic Surface" 
          className={styles.heroImg}
        />
      </div>
      
      <div className={styles.overlay} />
      <div className={styles.acrylicOverlay} />

      <div className={styles.content}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.kicker}
        >
          HexaLam Surfaces
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Acrylic <span>Laminates</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          High-gloss surface solutions engineered for
          modern interiors and long-term performance.
        </motion.p>
      </div>

      {/* Decorative Shine Element */}
      <div className={styles.shine} />
    </section>
  );
}