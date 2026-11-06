import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          🎲 Meeple <span className={styles.logoAccent}>&amp;</span> Mug
        </a>
        <p className={styles.tagline}>
          Lempar dadu, seruput kopi, pulang bawa cerita.
        </p>
      </div>

      <p className={styles.copyright}>
        © 2026 Meeple &amp; Mug Board Game Café. Dibuat oleh Marcellino
        Febrian (535250036).
      </p>
    </footer>
  );
}
