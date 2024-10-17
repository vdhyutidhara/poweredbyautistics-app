import React from "react";
import styles from "./Footer.module.css";
import Avatar from "@mui/material/Avatar";
import ContactInfo from "../ContactInfo";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footermenu}>
        <a href="/terms&condition">Terms & Conditons</a>
        <a href="/refundPolicy">Refund Policy</a>
        <a href="/privacyPolicy">Privacy Policy</a>
      </div>
      <div className={styles.headerMain}>
        <Avatar
          alt="Logo"
          src="images/logo.png"
          sx={{ height: "auto", width: "150px", margin: "0px auto" }}
        />
      </div>
      <ContactInfo />
    </div>
  );
}
