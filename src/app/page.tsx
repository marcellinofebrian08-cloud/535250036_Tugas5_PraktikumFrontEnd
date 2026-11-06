import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
      </main>
    </>
  );
}
