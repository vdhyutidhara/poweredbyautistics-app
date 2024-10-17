import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Components/Main/Home";
import Services from "../Components/Main/Services";
import Blog from "../Components/Main/Blog";
import About from "../Components/Main/About";
import PrivacyPolicy from "../Components/Foooter/privacyPolicy";
import RefundPolicy from "../Components/Foooter/refundPolicy";
import TermsCondition from "../Components/Foooter/termsCondition";

import styles from "./Router.module.css";
import { Instagram } from "@mui/icons-material";

// Active Link styling
let activeStyle = {
  fontWeight: "700",
  color: "#05a7d0",
};

// Links Object
const links = [
  { to: "/", title: "Home" },
  { to: "/services", title: "Services" },
  { to: "/blog", title: "Blog" },
  { to: "/about", title: "About" },
];

// Routes Object

export default function Router() {
  return (
    <div className={styles.mainBody}>
      <nav className={styles.navBar}>
        <div className={styles.navTab}>
          {links &&
            links?.map((link) => (
              <NavLink
                to={link.to}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.title}
              </NavLink>
            ))}
        </div>
        <div className={styles.socialIcon}>
          <a href="https://instagram.com/poweredbyautistics">
            <Instagram fontSize="small" />
          </a>
        </div>
      </nav>
      <hr className={styles.horLineStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="terms&condition" element={<TermsCondition />} />
        <Route path="refundPolicy" element={<RefundPolicy />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}
