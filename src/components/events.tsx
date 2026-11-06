import styles from "./events.module.css";

const events = [
  {
    icon: "🌙",
    tag: "Mingguan",
    title: "Game Night Jumat",
    day: "Setiap Jumat",
    time: "19.00 - 23.00",
    description:
      "Main bareng komunitas sampai larut malam, game master siap memandu meja yang baru gabung.",
  },
  {
    icon: "🏆",
    tag: "Bulanan",
    title: "Turnamen Bulanan",
    day: "Sabtu terakhir tiap bulan",
    time: "13.00 - 18.00",
    description:
      "Adu skill di Catan dan Codenames, juaranya bawa pulang voucher main dan board game baru.",
  },
  {
    icon: "🎓",
    tag: "Pemula",
    title: "Kelas Main untuk Pemula",
    day: "Setiap Minggu",
    time: "10.00 - 12.00",
    description:
      "Belajar aturan dasar game populer pelan-pelan, cocok buat yang baru pertama kali main.",
  },
  {
    icon: "🐉",
    tag: "Mingguan",
    title: "D&D Campaign Night",
    day: "Setiap Rabu",
    time: "18.30 - 22.30",
    description:
      "Petualangan Dungeons & Dragons berseri, karakter sudah disiapkan untuk pemain baru.",
  },
];

const testimonials = [
  {
    name: "Rina",
    role: "Mahasiswa",
    quote:
      "Awalnya cuma mau ngopi, ternyata keterusan main Catan sampai kafe tutup. Game masternya sabar banget ngajarin.",
  },
  {
    name: "Budi",
    role: "Ayah dua anak",
    quote:
      "Tempat paling pas buat quality time sama keluarga. Anak-anak sekarang ketagihan main The Game of Life.",
  },
  {
    name: "Dimas",
    role: "Member sejak 2024",
    quote:
      "Ikut Game Night tiap Jumat bikin saya punya banyak teman baru. Komunitasnya ramah dan seru.",
  },
];

export default function Events() {
  return (
    <section id="events" className={styles.events}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Event &amp; Komunitas</span>
          <h2 className={styles.title}>Main bareng selalu lebih seru</h2>
          <p className={styles.subtitle}>
            Tiap minggu ada saja acara di Meeple &amp; Mug. Datang sendiri juga
            nggak masalah, pasti kebagian teman main.
          </p>
        </div>

        <div className={styles.eventGrid}>
          {events.map((event) => (
            <article key={event.title} className={styles.eventCard}>
              <div className={styles.eventIcon}>{event.icon}</div>
              <div className={styles.eventContent}>
                <span className={styles.tag}>{event.tag}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <ul className={styles.schedule}>
                  <li>📅 {event.day}</li>
                  <li>🕖 {event.time}</li>
                </ul>
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className={styles.testimonialHeading}>
          Kata mereka yang sudah main
        </h3>

        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <figure key={item.name} className={styles.testimonialCard}>
              <span className={styles.stars}>★★★★★</span>
              <blockquote className={styles.quote}>“{item.quote}”</blockquote>
              <figcaption className={styles.person}>
                <span className={styles.avatar}>{item.name.charAt(0)}</span>
                <span>
                  <strong className={styles.personName}>{item.name}</strong>
                  <span className={styles.personRole}>{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
