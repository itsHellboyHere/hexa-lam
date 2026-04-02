"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { FiMenu, FiX, FiChevronDown, FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Cloudinary Download URL
  const catalogUrl =
    "https://res.cloudinary.com/dgifa4wgb/image/upload/fl_attachment/v1774895977/Hexlam_Brochure_compressed_huxfsx_dnlto5.pdf";

  // Returns styles.active if current path matches
  const isActive = (href) => (pathname === href ? styles.active : "");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/">
            <img src="/logo.jpg" alt="Hexa Lam" className={styles.logo} />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            <Link href="/" className={`${styles.link} ${isActive("/")}`}>
              Home
            </Link>

            <div
              ref={dropdownRef}
              className={styles.dropdownWrap}
              onClick={() => {
                if (isTouch) setDesktopDropdownOpen(!desktopDropdownOpen);
              }}
            >
              <Link
                href="/laminates"
                className={`${styles.link} ${
                  pathname.startsWith("/laminates") ? styles.active : ""
                }`}
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
                <Link
                  href="/laminates/acrylic-laminates"
                  className={isActive("/laminates/acrylic-laminates")}
                >
                  Acrylic Laminates
                </Link>
              </div>
            </div>

            <Link href="/about" className={`${styles.link} ${isActive("/about")}`}>
              About
            </Link>

            <Link href="/contact" className={`${styles.link} ${isActive("/contact")}`}>
              Contact
            </Link>

            <Link href="/freq" className={`${styles.link} ${isActive("/freq")}`}>
              F & Q
            </Link>

            {/* Desktop Download Button */}
            <a
              href={catalogUrl}
              download="HexaLam_Catalog.pdf"
              className={styles.downloadBtnDesktop}
            >
              <FiDownload size={14} style={{ marginRight: "6px" }} />
              Download
            </a>
          </nav>

          {/* Mobile hamburger */}
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
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={26} />
        </button>

        <Link href="/" className={isActive("/")} onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <div className={styles.mobileDropdownContainer}>
          <div className={styles.mobileLaminates}>
            <Link
              href="/laminates"
              className={pathname.startsWith("/laminates") ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Laminates
            </Link>

            <button
              className={`${styles.mobileChevron} ${
                mobileDropdownOpen ? styles.rotate : ""
              }`}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
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
                className={`${styles.subLink} ${isActive(
                  "/laminates/acrylic-laminates"
                )}`}
                onClick={() => setMenuOpen(false)}
              >
                Acrylic Laminates
              </Link>
            </div>
          )}
        </div>

        <Link href="/about" className={isActive("/about")} onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/contact" className={isActive("/contact")} onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link href="/freq" className={isActive("/freq")} onClick={() => setMenuOpen(false)}>
          F & Q
        </Link>

        {/* Mobile Download Button — always last in flex column, never hidden */}
        <a
          href={catalogUrl}
          download="HexaLam_Catalog.pdf"
          className={styles.downloadBtnMobile}
        >
          <FiDownload size={18} style={{ marginRight: "8px" }} />
          Download Catalog
        </a>
      </div>
    </>
  );
}