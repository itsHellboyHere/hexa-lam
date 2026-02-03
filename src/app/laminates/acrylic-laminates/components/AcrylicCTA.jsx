import Link from "next/link";
import styles from "../css/AcrylicCTA.module.css";

export default function AcrylicCTA() {
  return (
    <section className={styles.section}>
      <h2>Need Samples or Technical Details?</h2>
      <p>Our team can help with specifications and applications.</p>

      <Link href="/contact" className={styles.btn}>
        Contact HexaLam
      </Link>
    </section>
  );
}