import styles from "./navbar.module.css";

const menuItems = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "games", label: "Koleksi" },
  { id: "events", label: "Event" },
  { id: "menu", label: "Menu" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoIcon}>🎲</span>
          Meeple <span className={styles.logoAccent}>&amp;</span> Mug
        </a>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
