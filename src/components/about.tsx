import styles from "./about.module.css";

const features = [
  { icon: "⏱️", text: "Bayar per jam, main sepuasnya" },
  { icon: "🧑‍🏫", text: "Game master siap ngajarin dari nol" },
  { icon: "☕", text: "Kopi lokal dan cemilan rumahan" },
  { icon: "🏆", text: "Event dan turnamen rutin tiap bulan" },
];

const stats = [
  { value: "300+", label: "Koleksi board game" },
  { value: "25", label: "Meja siap dipakai" },
  { value: "1.200+", label: "Member komunitas" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.label}>Tentang Kami</span>
            <h2 className={styles.title}>
              Tempat nongkrong buat yang suka main bareng
            </h2>
            <p>
              Meeple &amp; Mug berawal dari kebiasaan kami main board game di
              meja makan rumah sampai larut malam. Sekarang mejanya jadi lebih
              besar: kafe hangat dengan ratusan game yang bisa kamu mainkan
              bareng teman, keluarga, atau kenalan baru.
            </p>
            <p>
              Belum tahu cara mainnya? Tenang, game master kami siap ngajarin
              dari awal. Kamu cukup pilih game, pesan kopi, dan nikmati
              keseruannya.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Kenapa main di sini?</h3>
            <ul className={styles.featureList}>
              {features.map((feature) => (
                <li key={feature.text}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
