"use client";

import Link from "next/link";
import { MoveLeft, RotateCcw } from "lucide-react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        {/* Decorative 404 with Laminate Texture feel */}
        <div className={styles.visual}>
          <h1 className={styles.glitch404}>404</h1>
          <div className={styles.sheetDecoration} />
        </div>

        <div className={styles.content}>
          <span className={styles.kicker}>Texture Not Found</span>
          <h2 className={styles.title}>
            Even the most <span>flawless surfaces</span> have edges.
          </h2>
          <p className={styles.desc}>
            The page you are looking for has been moved or doesn't exist. 
            Let's get you back to our premium collections.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              <MoveLeft size={18} />
              Return to Home
            </Link>
            <button 
              onClick={() => window.location.reload()} 
              className={styles.secondaryBtn}
            >
              <RotateCcw size={18} />
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}