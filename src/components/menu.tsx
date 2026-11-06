import styles from "./menu.module.css";

const packages = [
  {
    name: "Main Per Jam",
    price: "Rp15.000",
    unit: "/ orang / jam",
    features: ["Bebas pilih game", "Dipandu game master"],
    featured: false,
  },
  {
    name: "Paket 3 Jam",
    price: "Rp40.000",
    unit: "/ orang",
    features: ["Lebih hemat Rp5.000", "Gratis 1 minuman"],
    featured: true,
  },
  {
    name: "Main Sepuasnya",
    price: "Rp60.000",
    unit: "/ orang / hari",
    features: ["Main sampai kafe tutup", "Berlaku Senin - Kamis"],
    featured: false,
  },
];

const menuGroups = [
  {
    title: "☕ Kopi & Minuman",
    items: [
      { name: "Kopi Susu Meeple", price: "Rp22.000" },
      { name: "Americano", price: "Rp20.000" },
      { name: "Cappuccino", price: "Rp25.000" },
      { name: "Matcha Latte", price: "Rp27.000" },
      { name: "Teh Tarik", price: "Rp18.000" },
    ],
  },
  {
    title: "🍟 Cemilan",
    items: [
      { name: "Kentang Goreng", price: "Rp20.000" },
      { name: "Roti Bakar Cokelat Keju", price: "Rp22.000" },
      { name: "Nachos Keju", price: "Rp28.000" },
      { name: "Pisang Goreng", price: "Rp18.000" },
      { name: "Mochi Dadu", price: "Rp20.000" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Menu &amp; Harga</span>
          <h2 className={styles.title}>Bayar main, sekalian ngopi</h2>
          <p className={styles.subtitle}>
            Pilih paket main yang pas, lalu temani dengan kopi dan camilan dari
            dapur kami.
          </p>
        </div>

        <div className={styles.packageGrid}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`${styles.packageCard} ${
                pkg.featured ? styles.featured : ""
              }`}
            >
              {pkg.featured && <span className={styles.badge}>Favorit</span>}
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <p className={styles.price}>
                {pkg.price} <span className={styles.unit}>{pkg.unit}</span>
              </p>
              <ul className={styles.features}>
                {pkg.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.menuGrid}>
          {menuGroups.map((group) => (
            <div key={group.title} className={styles.menuCard}>
              <h3 className={styles.menuTitle}>{group.title}</h3>
              <ul className={styles.menuList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.menuItem}>
                    <span>{item.name}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.menuPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
