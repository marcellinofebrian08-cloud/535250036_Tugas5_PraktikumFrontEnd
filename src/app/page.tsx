import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import About from "../components/about";
import Games from "../components/games";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <About />
        <Games />
      </main>
    </>
  );
}
