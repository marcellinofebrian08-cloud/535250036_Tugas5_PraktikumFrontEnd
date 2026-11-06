import styles from "./contact.module.css";

const waNumber = "6281234567890";
const waMessage = "Halo Meeple & Mug, saya mau reservasi meja.";
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

const contactInfo = [
  {
    icon: "📍",
    title: "Alamat",
    lines: ["Jl. Dadu Raya No. 12", "Grogol, Jakarta Barat"],
  },
  {
    icon: "🕒",
    title: "Jam Buka",
    lines: ["Senin - Jumat: 12.00 - 23.00", "Sabtu - Minggu: 10.00 - 24.00"],
  },
  {
    icon: "📞",
    title: "WhatsApp",
    lines: ["0812-3456-7890"],
  },
  {
    icon: "📸",
    title: "Instagram",
    lines: ["@meepleandmug"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Kontak</span>
          <h2 className={styles.title}>Yuk, mampir ke meja kami</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.infoGrid}>
            {contactInfo.map((info) => (
              <div key={info.title} className={styles.infoCard}>
                <span className={styles.infoIcon}>{info.icon}</span>
                <div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className={styles.infoText}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.reserveCard}>
            <span className={styles.reserveIcon}>🎲</span>
            <h3 className={styles.reserveTitle}>Reservasi meja sekarang</h3>
            <p className={styles.reserveText}>
              Akhir pekan dan malam Game Night sering penuh. Amankan mejamu
              dulu lewat WhatsApp, cukup sebut tanggal, jam, dan jumlah orang.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waButton}
            >
              Reservasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
