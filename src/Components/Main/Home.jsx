import React from "react";
import styles from "./Home.module.css";
import Carousel from "../Home/Carousel";
import AboutUsCard from "../Home/AboutUsCard";
import ServiceCard from "../Home/ServiceCard";

export default function Home() {
  return (
    <div>
      <Carousel />
      <section className={styles.weAreBox}>
        Powered by Autistics is an Autistic led service organization.
        All programs are designed and implemented by Autistic Individuals.
        We use a Neurodiversity affirming, strength-based approach to
        nurture confident, self-assured Autistic individuals.

        <button>
          <a href="\about">DISCOVER MORE</a>
        </button>

      </section>
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
