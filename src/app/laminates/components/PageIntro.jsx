"use client";

import styles from "../css/PageIntro.module.css";

export default function PageIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.kicker}>Surface Category</span>

        <p>
          HexaLam laminates are premium high-gloss acrylic surfaces
          engineered for modern interiors. Designed to deliver
          consistent finish quality, surface durability, and long-term
          colour stability across residential and commercial spaces.
        </p>
      </div>
    </section>
  );
}