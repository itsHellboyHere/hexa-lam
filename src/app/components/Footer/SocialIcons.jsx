"use client";

import styles from "./SocialIcons.module.css";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import {FaInstagram ,FaYoutube ,FaWhatsapp} from "react-icons/fa";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram size={18} />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    label: "YouTube",
    icon: <FaYoutube size={18} />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919876543210", // 🔴 change number
    label: "WhatsApp",
    icon: <FaWhatsapp size={18} />,
  },
];

export default function SocialIcons() {
  return (
    <ul className={styles.socialList}>
      {SOCIALS.map((item) => (
        <li key={item.name} className={styles.iconItem}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <span className={styles.fill} />
            {item.icon}
          </a>
          <span className={styles.tooltip}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}