"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDesktopDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect touch device
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Hexa Lam"
              className={styles.logo}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.link}>
              Home
            </Link>

            <div
              ref={dropdownRef}
              className={styles.dropdownWrap}
              onClick={() => {
                if (isTouch) {
                  setDesktopDropdownOpen(!desktopDropdownOpen);
                }
              }}
            >
              <Link
                href="/laminates"
                className={styles.link}
              >
                Laminates
              </Link>

              <span
                className={`${styles.chevron} ${
                  desktopDropdownOpen ? styles.rotate : ""
                }`}
              >
                <FiChevronDown size={14} />
              </span>

              <div
                className={`${styles.dropdown} ${
                  desktopDropdownOpen ? styles.showDropdown : ""
                }`}
              >
                <Link href="/laminates/acrylic-laminates">
                  Acrylic Laminates
                </Link>
              </div>
            </div>

            <Link href="/about" className={styles.link}>
              About
            </Link>

            <Link href="/contact" className={styles.link}>
              Contact
            </Link>

            <Link href="/freq" className={styles.link}>
              F & Q
            </Link>
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
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={26} />
        </button>

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <div className={styles.mobileDropdownContainer}>
          <div className={styles.mobileLaminates}>
            <Link
              href="/laminates"
              onClick={() => setMenuOpen(false)}
            >
              Laminates
            </Link>

            <button
              className={`${styles.mobileChevron} ${
                mobileDropdownOpen ? styles.rotate : ""
              }`}
              onClick={() =>
                setMobileDropdownOpen(!mobileDropdownOpen)
              }
              aria-expanded={mobileDropdownOpen}
              aria-label="Toggle laminate types"
            >
              <FiChevronDown size={20} />
            </button>
          </div>

          {mobileDropdownOpen && (
            <div className={styles.mobileSubMenu}>
              <Link
                href="/laminates/acrylic-laminates"
                className={styles.subLink}
                onClick={() => setMenuOpen(false)}
              >
                Acrylic Laminates
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          href="/freq"
          onClick={() => setMenuOpen(false)}
        >
          F & Q
        </Link>
      </div>
    </>
  );
}