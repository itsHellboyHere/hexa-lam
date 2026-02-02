"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, ShieldCheck, Zap } from "lucide-react";
import styles from "./About.module.css";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
};

export default function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>

                {/* ACT 1: STORY */}
                <div className={styles.storyGrid}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span custom={0} variants={fadeIn} className={styles.kicker}>
                            Our Philosophy
                        </motion.span>

                        <motion.h2 custom={1} variants={fadeIn} className={styles.title}>
                            Modern Problems Need <span>Modern Surfaces</span>
                        </motion.h2>

                        <motion.p custom={2} variants={fadeIn} className={styles.desc}>
                            HexaLam was created to challenge outdated laminate standards.
                            We focus exclusively on high-gloss acrylic surfaces engineered
                            using contemporary pressing techniques and strict quality control.
                            The result is cleaner finishes, improved colour stability,
                            and long-term performance for modern interiors.
                        </motion.p>
                    </motion.div>

                    {/* Floating Sheet */}
                    <div className={styles.visualWrapper}>
                        <motion.div
                            className={styles.floatingSheet}
                            animate={{
                                rotateY: [0, 15, 0],
                                rotateX: [8, -8, 8],
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* This div creates the physical 3D "thickness" of the laminate */}
                            <div className={styles.sheetThickness} />

                            <div className={styles.sheetFace}>
                                {/* The actual decorative color layer */}
                                <div className={styles.acrylicSurface}>
                                    <div className={styles.surfaceGrain} />
                                </div>

                                {/* Logo looks like it is etched under the acrylic */}
                                <img
                                    src="/logo.png"
                                    alt="HexaLam"
                                    className={styles.logoBadge}
                                />

                                {/* Realistic light reflection */}
                                <div className={styles.glossReflect} />

                                {/* Edge highlight to show sharpness */}
                                <div className={styles.edgeHighlight} />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ACT 2: TRUST */}
                <div className={styles.trustSection}>
                    <div className={styles.trustHeader}>
                        <h3>The HexaLam Standard</h3>
                        <p>Built for real-world interiors, not showroom samples.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <TrustCard
                            index={0}
                            icon={<Factory size={22} />}
                            title="Precision Manufacturing"
                            text="Modern bonding processes ensure consistent gloss, flatness, and surface clarity across every sheet."
                        />
                        <TrustCard
                            index={1}
                            icon={<ShieldCheck size={22} />}
                            title="6H Surface Hardness"
                            text="Engineered to resist micro-scratches from daily cleaning and routine interior use."
                        />
                        <TrustCard
                            index={2}
                            icon={<Zap size={22} />}
                            title="UV Stable Polymers"
                            text="Formulated to maintain colour consistency in sunlit spaces and long-term exposure."
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.aboutCTA}>
                    <Link href="/laminates/acrylic" className={styles.ctaBtn}>
                        View Acrylic Laminates
                    </Link>
                </div>

                {/* ACT 3: STATS */}
                <div className={styles.statsBar}>
                    <div className={styles.statItem}>
                        <strong>100%</strong>
                        <span>Moisture-Resistant Core</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <strong>6H</strong>
                        <span>Surface Hardness</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <strong>UV+</strong>
                        <span>Colour Stability</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

function TrustCard({ icon, title, text, index }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover="hover" // Trigger children animations on hover
        >
            {/* Acrylic Gloss Effect Layers */}
            <div className={styles.cardBase} />
            <div className={styles.cardGloss} />
            <div className={styles.cardEdge} />

            <div className={styles.cardContent}>
                <div className={styles.iconBox}>{icon}</div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </motion.div>
    );
}