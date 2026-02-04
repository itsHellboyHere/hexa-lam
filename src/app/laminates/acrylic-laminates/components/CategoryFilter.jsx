"use client";

import { motion } from "framer-motion";
import styles from "../css/CategoryFilter.module.css";

const CATEGORIES = ["All", "ASA Sheet", "HD Acrylic", "Designer", "Mirror Glass"];

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className={styles.filterBar}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
        >
          <span className={styles.btnText}>{cat}</span>
          {activeCategory === cat && (
            <motion.div 
              layoutId="activeHighlight" 
              className={styles.activeHighlight}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}