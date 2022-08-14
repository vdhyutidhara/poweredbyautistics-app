import React from "react";
import styles from "./Home.module.css";
import Carousel from "../Home/Carousel";
import AboutUsCard from "../Home/AboutUsCard";
import ServiceCard from "../Home/ServiceCard";

export default function Home() {
  return (
    <div>
      <Carousel />
      <section className={styles.mainSection}>
        <div className={styles.mainLeft}>
          <AboutUsCard />
        </div>
        <div className={styles.mainRight}>
          <ServiceCard />
        </div>
      </section>
    </div>
  );
}
