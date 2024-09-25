import React from "react";
import styles from "./Home.module.css";
import ContactUs from "./ContactUs";

export default function Home() {

  return (
    <div>

      {/* Who We Are */}
      <section className={styles.weAreBox}>
        Powered by Autistics is an Autistic led service organization.
        <p>All programs are designed and implemented by Autistic Individuals. We use a
        Neurodiversity affirming, strength-based approach to nurture confident,
        self-assured Autistic individuals.
        </p>
      </section>

      {/* What We Do Section */}
      <section className={styles.weDoBox}>
        <p>
          We listen to the autistic community directly and build the services we
          wish we had ourselves. Currently this includes:
        </p>
        <ul>
          <li>Diagnosis for autistic children, teens and adults.</li>
          <li>
            Support and counselling for autistic people across all age groups.
          </li>
          <li>Support groups for Autistic people.</li>
          <li>Talks by autistic people about their lived experiences.</li>
          <li>Counsel and train parents/ family of Autistic individuals. </li>
          <li>Training of mainstream school teachers and principals</li>
          <li><a href="https://bit.ly/4eDI8Vu">Neurodivergent women and non-binary people support group.</a></li>
        </ul>
        <p>We are here to Empower Autistic individuals and their families!</p>
      </section>
      <br/>
      <ContactUs/>
      <br/>
      {/* Meet Up Section
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
 */}
    </div>
  );
}
