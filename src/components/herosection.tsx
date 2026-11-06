"use client";
import Carousel from "react-bootstrap/Carousel";
import styles from "./herosection.module.css";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "Lempar Dadu, Seruput Kopi",
    subtitle:
      "Ratusan board game siap dimainkan sambil ditemani kopi hangat dan camilan favoritmu.",
    imageUrl: "/images/banner_01.jpg",
  },
  {
    title: "Game Pilihan Bulan Ini",
    subtitle:
      "Adu strategi bareng teman di game rekomendasi kami yang lagi seru-serunya bulan ini.",
    imageUrl: "/images/banner_02.jpg",
  },
  {
    title: "Game Night Tiap Jumat",
    subtitle:
      "Kenalan sama pemain baru, ikut turnamen santai, dan bawa pulang hadiah tiap minggu.",
    imageUrl: "/images/banner_03.jpg",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <Carousel fade interval={4000}>
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
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
