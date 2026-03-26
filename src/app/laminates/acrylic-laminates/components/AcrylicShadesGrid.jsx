"use client";
import { motion } from "framer-motion";
import styles from "../css/AcrylicShadesGrid.module.css";
import { FEATURED_SHADES } from "../data/AcyrlicData";
import Link from "next/link";

export default function AcrylicShadesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.kicker}>The Palette</span>
            <h2>
              Acrylic <span>Shades</span>
            </h2>
          </div>
          <Link href="#collection" className={styles.ghostLink}>
            View Full Collection ↓
          </Link>
        </div>

        <div className={styles.grid}>
          {FEATURED_SHADES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/laminates/acrylic-laminates/${s.slug}`}
                className={styles.card}
              >
                <div className={styles.imageBox}>
                  {/* Hex swatch behind image for graceful fallback */}
                  <div
                    className={styles.hexSwatch}
                    style={{ background: s.hex }}
                  />
                  {/* <img src={s.img} alt={s.name} /> */}
                  <div className={styles.glossOverlay} />
                  <div className={styles.reflect} />
                </div>
                <div className={styles.meta}>
                  <div className={styles.text}>
                    <strong>{s.name}</strong>
                    <span>{s.id}</span>
                  </div>
                  <div className={styles.arrow}>→</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}