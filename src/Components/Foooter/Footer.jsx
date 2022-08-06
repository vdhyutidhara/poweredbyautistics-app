import React from "react";
import styles from "./Footer.module.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Avatar from "@mui/material/Avatar";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.headerMain}>
        <Avatar
          alt="Logo"
          src="images/logo.png"
          sx={{ height: "auto", width: "150px", margin: "0px auto" }}
        />
      </div>
      <div className={styles.socialIcon}>
        <span>
          <EmailIcon fontSize="small" />
        </span>
        <span>sudanshu17@gmail.com</span>

        <PhoneIcon fontSize="medium" />
        <span>8860076975</span>

        <FacebookIcon fontSize="medium" />
        <span>poweredbyautistics</span>

        <TwitterIcon fontSize="medium" />
        <span>@poweredbyautistics</span>
      </div>
    </div>
  );
}
