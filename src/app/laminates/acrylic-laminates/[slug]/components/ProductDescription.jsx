"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Maximize2,
  MoveLeft,
  FileText,
  ChevronRight,
  Layers,
  Sun,
} from "lucide-react";

import styles from "../css/ProductDescription.module.css";

export default function ProductDescription({ product }) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>

        {/* TOP NAV */}
        <nav className={styles.nav}>
          <Link
            href="/laminates/acrylic-laminates#full-collection"
            className={styles.backLink}
          >
            <MoveLeft size={18} />
            <span>Back to Collection</span>
          </Link>
          <div className={styles.brandTag}>HexaLam Acrylic</div>
        </nav>

        <div className={styles.layout}>

          {/* VISUAL */}
          <aside className={styles.visualSide}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={styles.imageFrame}
            >
              <div
                className={styles.colorSurface}
                style={{ "--color": product.hex }}
              />

              <div className={styles.glossOverlay} />
              <div className={styles.reflect} />

              <div className={styles.batchNote}>
                <strong>Pro Tip</strong>
                <span>Order from the same batch for uniform gloss.</span>
              </div>
            </motion.div>
          </aside>

          {/* CONTENT */}
          <section className={styles.contentSide}>
            <header className={styles.header}>
              <span className={styles.series}>{product.series}</span>
              <h1 className={styles.title}>{product.name}</h1>
              <span className={styles.code}>
                Design Code: {product.id}
              </span>
            </header>

            <p className={styles.description}>
              <strong>{product.name}</strong> from the {product.series} collection
              is crafted using <strong>100% pure acrylic</strong> to deliver
              exceptional surface clarity, long-lasting gloss, and superior
              durability—ideal for modern premium interiors.
            </p>

            {/* SPECS */}
            <div className={styles.specGrid}>

              <Spec
                icon={<ShieldCheck size={18} />}
                label="Surface Hardness"
                value="6H Scratch Resistant"
              />

              <Spec
                icon={<Sparkles size={18} />}
                label="Gloss Level"
                value="High Gloss Finish (>90 GU)"
              />

              <Spec
                icon={<Layers size={18} />}
                label="Material"
                value="100% Pure Acrylic"
              />

              <Spec
                icon={<Maximize2 size={18} />}
                label="Thickness"
                value="1.5 mm Standard"
              />

              <Spec
                icon={<Sun size={18} />}
                label="UV Resistance"
                value="Anti-Yellow Protection"
              />

            </div>

            {/* ACTIONS */}
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Request Sample <ChevronRight size={16} />
              </Link>

              {/* <button className={styles.secondaryBtn}>
                <FileText size={16} />
                Technical Datasheet
              </button> */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div className={styles.specItem}>
      <div className={styles.specIconWrap}>{icon}</div>
      <div className={styles.specText}>
        <span className={styles.specLabel}>{label}</span>
        <strong className={styles.specValue}>{value}</strong>
      </div>
    </div>
  );
}