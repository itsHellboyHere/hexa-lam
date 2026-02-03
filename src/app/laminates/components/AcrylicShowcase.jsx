"use client";

import Link from "next/link";
import styles from "../css/AcrylicShowcase.module.css";

export default function AcrylicShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* IMAGE */}
        <Link href="/laminates/acrylic-laminates" className={styles.imageWrap}>
          <div className={styles.image}>
            <span className={styles.imageCta}>
              Explore Acrylic →
            </span>
          </div>
        </Link>

        {/* TEXT */}
        <div className={styles.text}>
          <span className={styles.kicker}>Core Product</span>
          <h2>Acrylic Laminates</h2>
          <p>
            High-gloss acrylic laminate sheets offering superior
            reflectivity, smooth surface finish, and colour depth.
            Ideal for premium kitchens, wardrobes, and furniture panels.
          </p>

          <ul>
            <li>Mirror-like gloss finish</li>
            <li>Easy-to-clean non-porous surface</li>
            <li>Available in solid & contemporary colours</li>
          </ul>

          <Link href="/laminates/acrylic" className={styles.button}>
            Explore Acrylic Laminates
          </Link>
        </div>

      </div>
    </section>
  );
}