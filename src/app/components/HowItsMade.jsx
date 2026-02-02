"use client";

import styles from "@/app/css/HowItsMade.module.css";
import Link from "next/link";

const PROCESS = [
  {
    title: "Acrylic Surface Formation",
    video: "/videos/high-gloss.mp4",
    tall: true,
  },
  {
    title: "High-Pressure Bonding",
    video: "/videos/pressing.mp4",
  },
  {
    title: "Surface Finishing",
    video: "/videos/pressing.mp4",
  },
//   {
//     title: "Quality Inspection",
//     video: "/videos/pressing.mp4",
//   },
];

export default function HowItsMade() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* LEFT – Sticky */}
        <div className={styles.left}>
          <span className={styles.kicker}>Manufacturing Process</span>

          <h2 className={styles.title}>
            How HexaLam <br />
            <span>Laminates Are Made</span>
          </h2>

          <p className={styles.desc}>
            Every HexaLam acrylic laminate is produced using precision-controlled
            manufacturing processes to ensure flawless gloss, durability, and
            long-term colour stability for modern interiors.
          </p>

          {/* <ul className={styles.steps}>
            <li>High Gloss Acrylic coating</li>
            <li>High-pressure bonding</li>
            <li>Surface curing & stabilisation</li>
            <li>Multi-stage quality inspection</li>
          </ul> */}

          <Link href="/technical-specifications" className={styles.cta}>
           Download Product Sheet
          </Link>
        </div>

        {/* RIGHT – Video Grid */}
        <div className={styles.right}>
          {PROCESS.map((item) => (
            <div
              key={item.title}
              className={`${styles.card} ${item.tall ? styles.tall : ""}`}
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              />
              <div className={styles.overlay} />
              <span className={styles.cardTitle}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}