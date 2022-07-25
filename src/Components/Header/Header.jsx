import React from "react";
import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <div className={styles.headerMain}>
      <Avatar alt="Logo" src="images/logo.png" sx={{height: "auto", width: "150px", margin: "0px auto"}} />
    </div>
  );
}
