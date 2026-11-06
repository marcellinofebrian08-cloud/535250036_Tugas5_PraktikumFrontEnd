import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import About from "../components/about";
import Games from "../components/games";
import Events from "../components/events";
import Menu from "../components/menu";
import Contact from "../components/contact";
import Footer from "../components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <About />
        <Games />
        <Events />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
