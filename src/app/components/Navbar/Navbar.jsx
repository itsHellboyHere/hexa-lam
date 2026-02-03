"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/">
            <img src="/logo.png" alt="Hexa Lam" className={styles.logo} />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.link}>Home</Link>

            <div className={styles.dropdownWrap}>
              <Link href="/laminates" className={styles.link}>
                Laminates
              </Link>

              <span className={styles.chevron}>
                <FiChevronDown size={14} />
              </span>

              <div className={styles.dropdown}>
                <Link href="/laminates/acrylic-laminates">Acrylic Laminates</Link>
              </div>
            </div>

            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
{/* ===== MOBILE MENU OVERLAY ===== */}
<div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
  <button
    className={styles.closeBtn}
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
  >
    <FiX size={26} />
  </button>

  <Link href="/" onClick={() => setMenuOpen(false)}>
    Home
  </Link>

  {/* Laminates row: link + toggle */}
  <div className={styles.mobileLaminates}>
    <Link href="/laminates" onClick={() => setMenuOpen(false)}>
      Laminates
    </Link>

    <button
      className={styles.mobileChevron}
      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
      aria-expanded={mobileDropdownOpen}
      aria-label="Toggle laminate types"
    >
      <FiChevronDown size={16} />
    </button>
  </div>

  {/* Sub-item */}
  {mobileDropdownOpen && (
    <Link
      href="/laminates/acrylic-laminates"
      className={styles.subLink}
      onClick={() => setMenuOpen(false)}
    >
      Acrylic Laminates
    </Link>
  )}

  <Link href="/about" onClick={() => setMenuOpen(false)}>
    About
  </Link>

  <Link href="/contact" onClick={() => setMenuOpen(false)}>
    Contact
  </Link>
</div>
    </>
  );
}