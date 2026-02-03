import styles from "../css/Application.module.css";

const APPS = [
  "Kitchens",
  "Wardrobes",
  "Wall Panels",
  "Office Furniture",
  "Retail Interiors",
];

export default function AcrylicApplications() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {APPS.map((a, i) => (
          <div key={i} className={styles.item}>{a}</div>
        ))}
      </div>
    </section>
  );
}