import { games } from "../../lib/database";
import styles from "./games.module.css";

const difficultyClass: Record<string, string> = {
  Mudah: styles.easy,
  Sedang: styles.medium,
  Sulit: styles.hard,
};

export default function Games() {
  return (
    <section id="games" className={styles.games}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Koleksi Game</span>
          <h2 className={styles.title}>Pilih game, ajak teman, mulai main</h2>
          <p className={styles.subtitle}>
            Ini sebagian game favorit pengunjung kami. Masih ada ratusan lagi
            di rak, tinggal tanya game master kalau bingung mau main apa.
          </p>
        </div>

        <div className={styles.grid}>
          {games.map((game) => (
            <article key={game.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{game.category}</span>
                <span className={styles.emoji}>{game.emoji}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{game.name}</h3>
                <p className={styles.description}>{game.description}</p>

                <ul className={styles.info}>
                  <li>👥 {game.players}</li>
                  <li>⏱️ {game.duration}</li>
                </ul>

                <span
                  className={`${styles.difficulty} ${
                    difficultyClass[game.difficulty]
                  }`}
                >
                  {game.difficulty}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
