import styles from "./PrimaryCta.module.css";
import Link from "next/link";

export default function PrimaryCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <span className={styles.kicker}>Get Started</span>

          <h2 className={styles.title}>
            Explore Premium <br />
            <span>Acrylic Laminates</span>
          </h2>

          <p className={styles.desc}>
            Discover high-gloss acrylic laminate collections designed for modern
            kitchens, wardrobes, wall panels, and architectural interiors.
          </p>

          <div className={styles.actions}>
            <Link href="/laminates/acrylic" className={styles.primaryBtn}>
              View Acrylic Collection
            </Link>

            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}