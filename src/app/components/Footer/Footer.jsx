"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brand}>
          <Link href="/">
            <img src="/logo.png" alt="HexaLam" className={styles.logo} />
          </Link>

          <p className={styles.tagline}>
            Redefining modern interiors through innovation, durability, and refined 8H anti-scratch acrylic technology.
          </p>

          <SocialIcons />
        </div>

        {/* Navigation Links */}
        <div className={styles.links}>
<div>
            <h4>Collections</h4>
            {/* <Link href="/laminates/acrylic-laminates#full-collection">Full Collection</Link> */}
            <Link href="/laminates/acrylic-laminates">Acrylic Laminates</Link>
            <Link href="/laminates">Laminates</Link>
         
          </div>

          <div>
            
            <h4>Company</h4>
            <Link href="/about">Our Identity</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div>
            <h4>Reach Us</h4>
            <p className={styles.contactItem}>
              <a href="mailto:info@trendpvc.com">info@trendpvc.com</a>
            </p>
            <p className={styles.contactItem}>
              <a href="tel:+911140396922">+91-11 40396922</a>
            </p>
            <p className={styles.contactItem}>
              Delhi NCR, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Developer Credit */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} HexaLam.</span>
          <span className={styles.developer}>
            Developed by <a href="https://creatormonk.in" target="_blank" rel="noopener noreferrer">creatormonk.in</a>
          </span>
        </div>
      </div>
    </footer>
  );
}