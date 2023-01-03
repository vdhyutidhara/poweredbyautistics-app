import React from "react";
import styles from "./AboutUsCard.module.css";

export default function AboutUsCard() {
  return (
    <div>
      {/* Who we are */}
      <section className={styles.content}>
      </section>
      {/* <hr className={styles.horStyle} /> */}
      {/* What we do */}
      <section className={styles.content}>
        <h3>What we do</h3>
        
      </section>
      {/* <hr className={styles.horStyle} /> */}
      {/* What makes us different from other service organisations */}
      <section className={styles.content}>
        <h3>What makes us different from other service organisations</h3>
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
      </section>
    </div>
  );
}
