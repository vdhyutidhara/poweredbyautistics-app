import React from "react";
import styles from "./Home.module.css";
import btnAnimation from "../Home/glow-on-hover.module.css"
import Carousel from "../Home/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Carousal Section */}
      <Carousel />

      {/* Who We Are */}
      <section className={styles.weAreBox}>
        Powered by Autistics is an Autistic led service organization.
        All programs are designed and implemented by Autistic Individuals.
        We use a Neurodiversity affirming, strength-based approach to
        nurture confident, self-assured Autistic individuals.
        <Link to="/about" className={btnAnimation.glowOnHover}>
          DISCOVER MORE
        </Link>
      </section>

      {/* What We Do Section */}
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

      {/* Meet Up Section */}
      <section className={styles.meetupBox}>
        <h2>Our Meetups</h2>
        <div className={styles.meetupBoxCard}>
          <div className={styles.meetupBoxCard1}>
            <button>Know More</button>
          </div>
          <div className={styles.meetupBoxCard2}>
            <button>Know More</button>
          </div>
          <div className={styles.meetupBoxCard3}>
            <button>Know More</button>
          </div>
        </div>
      </section>

      {/* Empathy */}
      <section className={styles.empathyCard}>
        <h1>Why Us?</h1>
        <div>
          <p>
            Like the name says, Powered By Autistics has a 100% autistic staff.
            From the directors of the organization, to the programmers who built
            this site, and the writers who put up the material, we're all
            autistic.
          </p>
          <p>
            We are an organisation for the Autistc people, run by the Autistc
            people.
          </p>
        </div>
      </section>

    </div>
  );
}
