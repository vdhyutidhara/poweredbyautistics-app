import React from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
  return (
    <div>
      <div className={styles.serviceCardImg}>
        <img
          src="https://i.imgur.com/168deGc.jpg"
          alt="VirtualAutisticWomenGatheringImage"
        />
      </div>
      <div className={styles.serviceCardContent}>
        If you identify as a Woman and as an Autistic person, join us for a
        virtual Autistic Women’s Gathering on Sunday, 7th August at 4 pm. This
        gathering will be a safe space for us to share our personal stories, our
        experiences of being on the spectrum, discuss whatever topics are of
        interest to us and provide peer support.
        <div className={styles.button}>
          <a
            href="https://forms.gle/s6d8ZMavngK7DiuR9"
            target="_blank"
            rel="noreferrer"
          >
            RSVP
          </a>
        </div>
        <div className={styles.seeYou}>SEE YOU SOON!</div>
      </div>
    </div>
  );
}
