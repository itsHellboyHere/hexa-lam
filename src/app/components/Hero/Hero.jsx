"use client"; // Ensure this is at the top

import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Delay between each text element
        delayChildren: 0.1,   // Initial delay before starting
      },
    },
  };

  // Individual item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background stays the same */}
      <div className={styles.bg}>
        <img
          src="/hero2.jpg"
          alt="Laminate interior"
        />
        <div className={styles.acrylicOverlay} />
        <div className={styles.shine} />
        <div className={styles.gradient} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className={styles.kicker}>
            Laminates Collection
          </motion.span>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Modern Interior <br />
            <span>Laminates</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.desc}>
            Premium laminate surfaces designed for modern kitchens, wardrobes, and
            architectural interiors.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <Link href="/laminates" className={styles.primaryBtn}>
              Explore Laminates
            </Link>
            <Link href="/contact-us" className={styles.secondaryBtn}>
              Technical Specifications
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.stats}>
            <Stat value="6H" label="Surface Hardness" />
            <Stat value="UV+" label="Colour Stability" />
            <Stat value="Anti-Scratch" label="Daily Use Rated" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className={styles.stat}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}