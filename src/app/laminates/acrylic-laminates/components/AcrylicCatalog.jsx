"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/AcrylicCatalog.module.css";
import { ACRYLIC_PRODUCTS } from "../data/AcyrlicData";
import CategoryFilter from "../components/CategoryFilter";
import Link from "next/link";

export default function AcrylicCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? ACRYLIC_PRODUCTS
      : ACRYLIC_PRODUCTS.filter((p) => p.series === activeCategory);

  return (
    <section id="collection" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Full Directory</span>
          <h2>
            The <span>2026-27</span> Collection
          </h2>
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
                <Link href={`/laminates/acrylic-laminates/${product.slug}`}>
                  <div
                    className={styles.imageBox}
                    style={{ background: product.hex }}
                  >
                    {/* optional subtle texture instead of image */}
                    <div className={styles.glossOverlay} />
                    <div className={styles.reflectShine} />

                    {/* Shade badge */}
                    <span className={styles.shadeBadge}>{product.shade}</span>
                  </div>

                  <div className={styles.meta}>
                    <div className={styles.text}>
                      <span className={styles.series}>{product.series}</span>
                      <h3>{product.name}</h3>
                      <span className={styles.code}>{product.id}</span>
                    </div>
                    {/* Hex dot preview */}
                    <div
                      className={styles.hexDot}
                      style={{ background: product.hex }}
                      title={product.name}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.disclaimer}>
          <p>
            * Standard Sheet Size: 8×4 ft (2440×1220 mm). Thickness: 1.5 mm.
            6H Anti-Scratch. 100% Pure Acrylic.
          </p>
        </div>
      </div>
    </section>
  );
}