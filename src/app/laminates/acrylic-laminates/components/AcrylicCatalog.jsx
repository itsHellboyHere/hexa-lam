"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/AcrylicCatalog.module.css";
import { ACRYLIC_PRODUCTS } from "../data/AcyrlicData";
import CategoryFilter from "../components/CategoryFilter";

export default function AcrylicCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? ACRYLIC_PRODUCTS 
    : ACRYLIC_PRODUCTS.filter(p => p.series.includes(activeCategory));

  return (
    <section id="full-collection" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Full Directory</span>
          <h2>The <span>2026-27</span> Collection</h2>
        </div>

        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
              >
                <div className={styles.imageBox}>
                  <img src={product.img} alt={product.name} />
                  <div className={styles.glossOverlay} />
                  <div className={styles.reflectShine} />
                </div>
                
                <div className={styles.meta}>
                  <div className={styles.text}>
                    <span className={styles.series}>{product.series}</span>
                    <h3>{product.name}</h3>
                    <span className={styles.code}>{product.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.disclaimer}>
          <p>* Standard Product Size: 8 x 2 ft. [cite: 265, 288] Thickness varies by series (1.0mm - 2.5mm). [cite: 94, 438]</p>
        </div>
      </div>
    </section>
  );
}