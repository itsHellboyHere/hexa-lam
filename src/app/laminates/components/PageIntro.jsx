"use client";

import { motion } from "framer-motion";
import styles from "../css/PageIntro.module.css";

export default function PageIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.left}
          >
            <span className={styles.kicker}>Surface Category</span>
            <h2 className={styles.title}>
              Engineering <span>Aesthetics</span>
            </h2>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className={styles.right}
          >
            <p className={styles.lead}>
              At HexaLam, we offer an extensive range of high-quality laminates 
              designed to elevate the <strong>aesthetics and functionality</strong> of your spaces. 
              Our surfaces are crafted using cutting-edge technology and premium materials.
            </p>
            
            <p className={styles.secondary}>
              Whether you’re outfitting a minimalist home or a high-traffic commercial office, 
              our laminates provide a seamless blend of durability and sophistication. 
              Engineered to withstand daily wear while maintaining a stunning, eco-friendly finish.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}