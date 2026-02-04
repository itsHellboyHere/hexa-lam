"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, Sparkles, Send, Loader2, AlertCircle } from "lucide-react";
import { sendInquiry } from "@/app/actions/sendEmail";
import styles from "@/app/css/ContactPage.module.css";

export default function HexalamContact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({}); 

  async function handleSubmit(event) {
    event.preventDefault();
    setIsPending(true);
    setErrors({}); // Clear previous errors
    
    const formData = new FormData(event.target);
    const result = await sendInquiry(formData);
    
    setIsPending(false);
    
    if (result.success) {
      setStatus("success");
      event.target.reset();
    } else {
      if (typeof result.error === "object") {
        setErrors(result.error); 
      } else {
        setStatus("error"); // Fallback for general server errors
      }
    }
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className={styles.kicker}>Direct Partnership</span>
          <h1 className={styles.title}>Where technology meets <br /><span>timeless design.</span></h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input name="name" type="text" placeholder="e.g. Vishal Kumar" className={errors.name ? styles.inputError : ""} />
                {errors.name && <span className={styles.errorText}>{errors.name[0]}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label>Professional Role</label>
                <select name="role" defaultValue="" className={errors.role ? styles.inputError : ""}>
                  <option value="" disabled>Select your role</option>
                  <option>Architect / Interior Designer</option>
                  <option>Modular Kitchen Manufacturer</option>
                  <option>Dealer / Distributor</option>
                  <option>Individual Homeowner</option>
                </select>
                {errors.role && <span className={styles.errorText}>{errors.role[0]}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input name="email" type="email" placeholder="name@company.com" className={errors.email ? styles.inputError : ""} />
                {errors.email && <span className={styles.errorText}>{errors.email[0]}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="+91" className={errors.phone ? styles.inputError : ""} />
                {errors.phone && <span className={styles.errorText}>{errors.phone[0]}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Inquiry Type</label>
                <select name="inquiryType">
                  <option>Request Physical Sample Kit</option>
                  <option>Project Quotation</option>
                  <option>Technical Specification</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Project Timeline</label>
                <select name="timeline">
                  <option>Immediate</option>
                  <option>1–3 Months</option>
                  <option>Future Reference</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Project Details</label>
              <textarea name="message" rows={4} placeholder="Describe your requirement or reference design codes…" className={errors.message ? styles.inputError : ""} />
              {errors.message && <span className={styles.errorText}>{errors.message[0]}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isPending}>
              {isPending ? (
                <><span>Processing...</span><Loader2 size={16} className={styles.spin} /></>
              ) : (
                <><span>Start a Project Discussion</span><Send size={16} /></>
              )}
            </button>

            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.successMsg}>
                Inquiry sent successfully. Our technical team will contact you shortly.
              </motion.p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}><AlertCircle size={14} /> Failed to send. Please check your connection and try again.</p>
            )}
          </form>
        </motion.div>

        {/* RIGHT — INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={styles.infoSide}
        >
          <div className={styles.specGrid}>
            <div className={styles.specItem}>
              <ShieldCheck size={22} className={styles.icon} />
              <div>
                <strong>8H Scratch Resistant Surface</strong>
                <span>Industry-leading hardness certified</span>
              </div>
            </div>
            <div className={styles.specItem}>
              <Sparkles size={22} className={styles.icon} />
              <div>
                <strong>Mirror-Like Gloss Finish</strong>
                <span>Gloss level exceeding 90 for exceptional depth</span>
              </div>
            </div>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <Mail size={18} className={styles.icon} />
              <div><label>Email</label><span>info@trendpvc.com</span></div>
            </div>
            <div className={styles.detailItem}>
              <Phone size={18} className={styles.icon} />
              <div><label>Customer Care</label><span>+91-11 40396922</span></div>
            </div>
            <div className={styles.detailItem}>
              <MapPin size={18} className={styles.icon} />
              <div><label>Location</label><span>Delhi NCR, India</span></div>
            </div>
          </div>

          <div className={styles.trustFooter}>
            <p>Designed for professional interior applications</p>
            <div className={styles.networkStats}>
              <span><strong>Acrylic </strong>Laminates</span>
              <span><strong>Interior</strong> Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}