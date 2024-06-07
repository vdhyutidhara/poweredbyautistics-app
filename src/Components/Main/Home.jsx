import React, { useState } from "react";
import styles from "./Home.module.css";
import btnAnimation from "../Home/glow-on-hover.module.css";
import Carousel from "../Home/Carousel";
import { Link } from "react-router-dom";
// import ContactForm from "./contactFrom";

export default function Home() {
  let [isSubmit, updateSubmit] = useState("");
  let [inputName, updateName] = useState("");
  let [inputNumber, updateNumber] = useState("");
  let [inputMessage, updateMessage] = useState("");

  function handleonChange(event, resetFuntion) {
    resetFuntion(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      updateSubmit(() => (isSubmit = "success"));
      updateMessage("");
      updateNumber("");
      updateName("");
    } catch (error) {
      console.error("Error:", error);
      updateSubmit(() => {
        return (isSubmit = "error");
      });
    }
  }

  return (
    <div>
      {/* Carousal Section */}
      <Carousel />

      {/* Who We Are */}
      <section className={styles.weAreBox}>
        Powered by Autistics is an Autistic led service organization. All
        programs are designed and implemented by Autistic Individuals. We use a
        Neurodiversity affirming, strength-based approach to nurture confident,
        self-assured Autistic individuals.
        <Link to="/about" className={btnAnimation.glowOnHover}>
          DISCOVER MORE
        </Link>
      </section>

      {/* What We Do Section */}
      <section className={styles.weDoBox}>
        <p>
          We listen to the autistic community directly and build the services we
          wish we had ourselves. Currently this includes:
        </p>
        <ol>
          <li>Diagnosis for autistic children, teens and adults.</li>
          <li>
            Support and counselling for autistic people across all age groups.
          </li>
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

      {/* Get In touch with Us */}
      <section className={styles.getInTouchCard}>
        <h1>Get In Touch</h1>
        <form name="contact" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label for="name">Your Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={inputName}
              onChange={(event) => handleonChange(event, updateName)}
            />
          </p>
          <p>
            <label for="phone">Your Phone</label>
            <br />
            <input
              type="phone"
              id="phone"
              name="phone"
              value={inputNumber}
              onChange={(event) => handleonChange(event, updateNumber)}
            />
          </p>
          <p>
            <label for="message">Your Message </label>
            <br />
            <textarea
              name="message"
              id="message"
              value={inputMessage}
              onChange={(event) => handleonChange(event, updateMessage)}
            ></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        {isSubmit === "success" ? (
          <p> Your Form is submitted succesfully </p>
        ) : isSubmit === "error" ? (
          <p>Network response was not ok, please try again</p>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
