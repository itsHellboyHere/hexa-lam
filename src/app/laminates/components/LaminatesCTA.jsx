"use client";

import Link from "next/link";
import styles from "../css/LaminatesCTA.module.css";

export default function LaminatesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2>Need Technical Details or Samples?</h2>

        <p>
          Get in touch with our team for specifications,
          applications, and project guidance.
        </p>

        <Link href="/contact" className={styles.button}>
          Contact HexaLam
        </Link>
      </div>
    </section>
  );
}