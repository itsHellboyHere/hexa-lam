import styles from "@/app/css/ProductHighlight.module.css";
import Link from "next/link";

export default function ProductHighlight() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.kicker}>Product Category</span>

          <h2 className={styles.title}>
            Acrylic <br />
            <span>Laminates</span>
          </h2>

          <p className={styles.desc}>
            High-gloss acrylic laminate surfaces engineered for premium kitchens,
            wardrobes, and architectural interiors.
          </p>

          <Link href="/acrylic-laminates" className={styles.cta}>
            Explore Acrylic Laminates
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <img
              src="/products/acrylic-hero.webp"
              alt="Acrylic laminate surface detail"
            />
          </div>
        </div>

      </div>
    </section>
  );
}