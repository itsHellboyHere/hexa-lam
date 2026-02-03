"use client";

import { motion } from "framer-motion";
import styles from "../css/AcrylicIntro.module.css";

export default function AcrylicIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.inner}
        >
          <div className={styles.textContent}>
            <p className={styles.lead}>
              Acrylic Laminates are the perfect blend of <strong>luxury aesthetics</strong> and 
              long-lasting performance. Crafted with a high-gloss mirror-like finish, 
              these laminates bring unmatched depth, clarity, and elegance to modern interiors. 
              Their smooth, non-porous surface enhances color vibrancy while ensuring superior 
              resistance to scratches, stains, and moisture.
            </p>
            
            <div className={styles.divider}>
              <span className={styles.dot} />
              <div className={styles.line} />
            </div>

            <p className={styles.secondary}>
              Ideal for kitchens, wardrobes, wall panels, office furniture, and retail spaces, 
              acrylic laminates elevate any space with a sleek, contemporary appeal. 
              Easy to maintain and eco-friendly, they retain their shine for years, 
              making them a smart choice for both residential and commercial applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}