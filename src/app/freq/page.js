"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import styles from "./Faq.module.css";

const FAQ_DATA = [
  {
    question: "What makes HexaLam Acrylic different from standard PVC laminates?",
    answer: "HexaLam uses a specialized 6-layer construction featuring a PMMA acrylic top layer. Unlike PVC, it offers a mirror-like gloss level (>90), 8H scratch resistance, and superior UV stability that prevents yellowing over time."
  },
  {
    question: "Is HexaLam really scratch-proof?",
    answer: "HexaLam is rated 8H for surface hardness, which is the highest in the industry. While it is highly resistant to everyday micro-scratches from cleaning and handling, we recommend using a soft microfiber cloth to maintain the pristine gloss."
  },
  {
    question: "Can I use HexaLam for kitchen cabinets near the stove?",
    answer: "Yes. Our acrylic sheets are moisture and heat resistant. However, to maintain longevity, ensure proper ventilation and avoid direct contact with open flames or high-temperature steam for extended periods."
  },
  {
    question: "How do I clean and maintain the high-gloss finish?",
    answer: "Maintenance is simple. Use a damp microfiber cloth with a mild soap solution. Avoid abrasive scrubbers, paper towels, or cleaners containing ammonia and alcohol, as they can dull the surface over time."
  },
  {
    question: "Does the color fade under direct sunlight?",
    answer: "No. HexaLam is engineered with UV-resistant technology. This ensures that even vibrant or light colors retain their brilliance and 'just-installed' look for years without fading or delamination."
  },
  {
    question: "What is the standard size and thickness available?",
    answer: "HexaLam is typically available in 8ft x 4ft (2440mm x 1220mm) sheets. The thickness ranges from 1.0mm to 2.5mm depending on the series (HD, ASA, or Glass series)."
  }
];

export default function FAQPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Support Center</span>
          <h1 className={styles.title}>Frequently Asked <span>Questions</span></h1>
          <p className={styles.subtitle}>
            Everything you need to know about HexaLam Acrylic technology and maintenance.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQ_DATA.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>

        <div className={styles.contactCta}>
          <HelpCircle size={32} className={styles.ctaIcon} />
          <h3>Still have questions?</h3>
          <p>Our technical team is ready to help with your project specifications.</p>
          <a href="/contact">Contact Support</a>
        </div>
      </div>
    </main>
  );
}

function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.question}>
        <h3>{item.question}</h3>
        <div className={styles.toggle}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.answer}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}