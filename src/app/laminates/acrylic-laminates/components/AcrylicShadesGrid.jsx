"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../css/AcrylicShadesGrid.module.css";

const SHADES = [
  { id: "arctic-white", name: "Arctic White", code: "HL-101", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
  { id: "champagne-pearl", name: "Champagne Pearl", code: "HL-102", img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80" },
  { id: "titanium-grey", name: "Titanium Grey", code: "HL-103", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80" },
  { id: "deep-charcoal", name: "Deep Charcoal", code: "HL-104", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80" },
  { id: "emerald-gloss", name: "Emerald Gloss", code: "HL-105", img: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?auto=format&fit=crop&w=800&q=80" },
  { id: "midnight-obsidian", name: "Midnight Obsidian", code: "HL-106", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80" },
];

export default function AcrylicShadesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.kicker}>The Palette</span>
            <h2>Acrylic <span>Shades</span></h2>
          </div>
          {/* Anchor link to the full directory section below */}
          <Link href="#full-collection" className={styles.ghostLink}>
            View Full Collection ↓
          </Link>
        </div>

        <div className={styles.grid}>
          {SHADES.map((s, i) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/laminates/acrylic-laminates/${s.id}`} className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={s.img} alt={s.name} />
                  <div className={styles.glossOverlay} />
                  <div className={styles.reflect} />
                </div>
                <div className={styles.meta}>
                  <div className={styles.text}>
                    <strong>{s.name}</strong>
                    <span>{s.code}</span>
                  </div>
                  <div className={styles.arrow}>→</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}