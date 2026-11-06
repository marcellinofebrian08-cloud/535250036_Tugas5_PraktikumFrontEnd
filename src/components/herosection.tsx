"use client";
import Carousel from "react-bootstrap/Carousel";
import styles from "./herosection.module.css";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLabel: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    title: "Lempar Dadu, Seruput Kopi",
    subtitle:
      "Ratusan board game siap dimainkan sambil ditemani kopi hangat dan camilan favoritmu.",
    imageUrl: "/images/banner_01.jpg",
    ctaLabel: "Lihat Koleksi Game",
    ctaLink: "#games",
  },
  {
    title: "Game Pilihan Bulan Ini",
    subtitle:
      "Adu strategi bareng teman di game rekomendasi kami yang lagi seru-serunya bulan ini.",
    imageUrl: "/images/banner_02.jpg",
    ctaLabel: "Cek Detailnya",
    ctaLink: "#games",
  },
  {
    title: "Game Night Tiap Jumat",
    subtitle:
      "Kenalan sama pemain baru, ikut turnamen santai, dan bawa pulang hadiah tiap minggu.",
    imageUrl: "/images/banner_03.jpg",
    ctaLabel: "Ikut Event",
    ctaLink: "#events",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <Carousel
        fade
        interval={5000}
        pause="hover"
        prevIcon={<span className={styles.arrow}>‹</span>}
        nextIcon={<span className={styles.arrow}>›</span>}
        prevLabel="Sebelumnya"
        nextLabel="Berikutnya"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className={styles.overlay}></div>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <a href={slide.ctaLink} className={styles.ctaButton}>
                {slide.ctaLabel}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
