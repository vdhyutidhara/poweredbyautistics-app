import React from "react";
import styles from "./ContactInfo.module.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactInfo() {
    return (<div className={styles.socialIcon}>
        <div className={styles.tableItem}>
          <div><EmailIcon fontSize="small" /></div>
          <div><a href="mailto:poweredbyautistics@gmail.com">poweredbyautistics@gmail.com</a></div>
        </div>
        
        <div className={styles.tableItem}>
        <div><PhoneIcon fontSize="medium" /></div>
        <div><a href="https://wa.me/+918882165697?text=Hello%20I%20wanted%20information%20about%20">+918882165697</a></div>
        </div>


        <div className={styles.tableItem}>
        <span><FacebookIcon fontSize="medium" /></span>
        <span><a href="https://www.facebook.com/p/Powered-By-Autistics-61560397297769/">poweredbyautistics</a></span>
        </div>
      </div>);
}
