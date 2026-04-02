import styles from "./PrimaryCta.module.css";
import Link from "next/link";

export default function PrimaryCTA() {
  // The URL with 'fl_attachment' added to force the download
  const catalogUrl = "https://res.cloudinary.com/dgifa4wgb/image/upload/fl_attachment/v1774895977/Hexlam_Brochure_compressed_huxfsx_dnlto5.pdf";

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
            <Link href="/laminates/acrylic-laminates" className={styles.primaryBtn}>
              View Acrylic Collection
            </Link>

            {/* NEW DOWNLOAD BUTTON */}
            <a 
              href={catalogUrl} 
              download="HexaLam_Brochure.pdf"
              className={styles.downloadBtn}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Catalogue
            </a>

            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}