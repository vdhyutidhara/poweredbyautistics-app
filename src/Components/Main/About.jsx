import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Meet our founders</h1>
      <div className={styles.cardContainer}>
        <div className={styles.founderCard}>
          <img src="https://i.imgur.com/UawOhEd.jpg" alt="sudhanshu_img" />
          <h2>Sudhanshu Grover</h2>

        </div>
        <div className={styles.founderCard}>
          <img src="https://avatars.githubusercontent.com/u/4136334?v=4" alt="aniket_img" />
          <h2>Aniket Kadam</h2>

        </div>
      </div>
    </div>
  );
}
