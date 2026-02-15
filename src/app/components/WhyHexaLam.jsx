"use client";

import styles from "@/app/css/WhyHexalam.module.css";
import { Sparkles, Droplets, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

/* ===== CLEAN MOTION VARIANTS ===== */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyHexaLam() {
  return (
    <motion.section
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={itemVariants}
        >
          <span className={styles.kicker}>Engineering Excellence</span>
          <h2 className={styles.title}>Why HexaLam</h2>
          <p className={styles.subtitle}>
            Premium laminate surfaces designed for modern Indian interiors,
            engineered for durability, finish, and long-term performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>
          <FeatureCard
            icon={<Sparkles size={26} />}
            title="High-Gloss Precision Finish"
            desc="Factory-controlled acrylic coating delivers a deep, mirror-like finish for kitchens, wardrobes, and architectural panels."
          />

          <FeatureCard
            icon={<Droplets size={26} />}
            title="Moisture & Heat Resistant"
            desc="Built to handle humidity, heat, and daily kitchen usage without swelling, fading, or surface damage."
          />

          <FeatureCard
            icon={<SunMedium size={26} />}
            title="UV Colour Stability"
            desc="Advanced pigments maintain colour consistency even in sunlit interiors and long-term exposure."
          />
        </div>
      </div>
    </motion.section>
  );
}

/* ===== CARD ===== */

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      className={styles.card}
      variants={itemVariants}
      whileHover={{ y: -6 }}
    >
      <div className={styles.iconWrap}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}