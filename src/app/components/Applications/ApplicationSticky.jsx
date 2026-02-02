import styles from "./ApplicationSticky.module.css";
import Link from "next/link";

const APPLICATIONS = [
  {
    title: "Modular Kitchens",
    image: "/applications/kitchen.jpg",
    link: "/laminates/kitchen",
  },
  {
    title: "Wardrobes & Storage",
    image: "/applications/wardrobe.jpg",
    link: "/laminates/wardrobe",
  },
  {
    title: "Wall Panels",
    image: "/applications/interior.jpg",
    link: "/laminates/wall-panels",
  },
  {
    title: "Commercial Interiors",
    image: "/applications/comm.jpg",
    link: "/laminates/commercial",
  },
];

export default function ApplicationsSticky() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* LEFT – SCROLLABLE CARDS */}
        <div className={styles.left}>
          {APPLICATIONS.map((item) => (
            <Link key={item.title} href={item.link} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay} />
              </div>
              <div className={styles.cardTitle}>{item.title}</div>
            </Link>
          ))}
        </div>

        {/* RIGHT – STICKY CONTENT */}
        <div className={styles.right}>
          <span className={styles.kicker}>Applications</span>

          <h2 className={styles.title}>
            Designed for <br />
            <span>Modern Interiors</span>
          </h2>

          <p className={styles.desc}>
            HexaLam acrylic laminates are engineered for real-world Indian
            interiors — balancing refined aesthetics, surface durability, and
            long-term everyday performance.
          </p>

          <Link href="/laminates" className={styles.cta}>
            Explore All Laminates
          </Link>
        </div>
      </div>
    </section>
  );
}