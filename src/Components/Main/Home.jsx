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
      <section className={styles.weDoBox}>
        <p>
          We listen to the autistic community directly and build the services we wish we had ourselves. Currently this includes:
        </p>
        <ol>
          <li>Diagnosis for autistic children, teens and adults.</li>
          <li>Support and counselling for autistic people across all age groups.</li>
          <li>Support groups for Autistic people.</li>
          <li>Talks by autistic people about their lived experiences.</li>
          <li>Counsel and train parents/ family of Autistic individuals. </li>
          <li>Training of mainstream school teachers and principals</li>
        </ol>
        <p>We are here to Empower Autistic individuals and their families!</p>
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
