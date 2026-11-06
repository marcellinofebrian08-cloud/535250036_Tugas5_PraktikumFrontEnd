"use client";
import { useEffect, useState } from "react";
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
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setActiveId(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 100) {
          current = item.id;
        }
      });

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (isBottom && document.getElementById("contact")) {
        current = "contact";
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleClick("home")}
        >
          <span className={styles.logoIcon}>🎲</span>
          Meeple <span className={styles.logoAccent}>&amp;</span> Mug
        </a>

        <button
          type="button"
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${
                  activeId === item.id ? styles.active : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
