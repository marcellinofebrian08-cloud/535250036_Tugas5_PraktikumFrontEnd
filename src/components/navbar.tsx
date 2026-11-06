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
          onClick={() => setActiveId("home")}
        >
          <span className={styles.logoIcon}>🎲</span>
          Meeple <span className={styles.logoAccent}>&amp;</span> Mug
        </a>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${
                  activeId === item.id ? styles.active : ""
                }`}
                onClick={() => setActiveId(item.id)}
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
