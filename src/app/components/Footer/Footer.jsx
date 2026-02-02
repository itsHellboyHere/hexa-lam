import styles from "./Footer.module.css";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/">
            <img src="/logo.png" alt="HexaLam" className={styles.logo} />
          </Link>

          <p className={styles.tagline}>
            Premium acrylic laminate solutions for modern Indian interiors.
          </p>

          <SocialIcons />
        </div>

        {/* Links */}
        <div className={styles.links}>
          <div>
            <h4>Products</h4>
            <Link href="/laminates">Laminates</Link>
            <Link href="/laminates/acrylic">Acrylic Laminates</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* ✅ NEW CONTACT BLOCK */}
          <div>
            <h4>Contact</h4>

            <p className={styles.contactItem}>
              📧 <a href="mailto:info@hexalam.com">info@hexalam.com</a>
            </p>

            <p className={styles.contactItem}>
              📞 <a href="tel:+919876543210">+91 98765 43210</a>
            </p>

            <p className={styles.contactItem}>
              📍 Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} HexaLam. All rights reserved.
      </div>
    </footer>
  );
}