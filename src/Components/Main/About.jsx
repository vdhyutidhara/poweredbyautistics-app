import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <div className={styles.aboutImage}>
        <img src="https://i.imgur.com/lYARCqI.jpeg" alt="AboutPageImage" />
      </div>
    </div>
  );
}
