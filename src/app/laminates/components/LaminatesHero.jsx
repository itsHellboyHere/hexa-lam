"use client";

import styles from "../css/LaminatesHero.module.css";

export default function LaminatesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.kicker}>HexaLam Laminates</span>
        <h1>
          Precision Acrylic<br />
          Surface Solutions
        </h1>
        {/* <p>
          High-gloss laminate surfaces engineered for modern
          interiors, long-term durability, and visual clarity.
        </p> */}
      </div>
    </section>
  );
}