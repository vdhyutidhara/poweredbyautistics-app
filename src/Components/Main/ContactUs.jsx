import styles from "./ContactUs.module.css";
import React, { useState } from "react";

export default function ContactUs() {
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
  
return <section className={styles.getInTouchCard}>
<div>
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
      <label for="phone">Your Phone Number</label>
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
  </div>
</section>
}