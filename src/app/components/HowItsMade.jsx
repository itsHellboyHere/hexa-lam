"use client";

import { useRef, useState } from "react";
import styles from "@/app/css/HowItsMade.module.css";
import Link from "next/link";
import { Play } from "lucide-react";

const PROCESS = [
  {
    title: "Acrylic Surface Formation",
    video:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/f_auto,q_auto,w_1280/high-gloss_b8hhwj.mp4",
    poster:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/so_1.2,f_jpg,q_auto,w_1280/high-gloss_b8hhwj.mp4",
    tall: true,
  },
  {
    title: "High-Pressure Bonding",
    video:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/f_auto,q_auto,w_1280/pressing_pd1qvo.mp4",
    poster:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/so_1.5,f_jpg,q_auto,w_1280/pressing_pd1qvo.mp4",
  },
  {
    title: "Surface Finishing",
    video:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/f_auto,q_auto,w_1280/pressing_pd1qvo.mp4",
    poster:
      "https://res.cloudinary.com/dgifa4wgb/video/upload/so_2.2,f_jpg,q_auto,w_1280/pressing_pd1qvo.mp4",
  },
];

export default function HowItsMade() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        if (video.paused) {
          video.play();
          setActiveIndex(index);
        } else {
          video.pause();
          setActiveIndex(null);
        }
      } else {
        video.pause();
      }
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* LEFT */}
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

          <Link href="/technical-specifications" className={styles.cta}>
            Download Product Sheet
          </Link>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {PROCESS.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} ${item.tall ? styles.tall : ""}`}
              onClick={() => togglePlay(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={styles.video}
                src={item.video}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* Play Overlay */}
              {activeIndex !== index && (
                <div className={styles.playOverlay}>
                  <Play size={28} />
                </div>
              )}

              <div className={styles.overlay} />
              <span className={styles.cardTitle}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}