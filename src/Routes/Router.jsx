import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Components/Main/Home";
import Contact from "../Components/Main/Contact";
import Course from "../Components/Main/Course";
import Blog from "../Components/Main/Blog";
import About from "../Components/Main/About";

import styles from "./Router.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Active Link styling
let activeStyle = {
  fontWeight: "700",
};

// Links Object
const links = [
  { to: "/", title: "Home" },
  { to: "/course", title: "Course" },
  { to: "/blog", title: "Blog" },
  { to: "/about", title: "About" },
  { to: "/contact", title: "Contact" },
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
          <FacebookIcon fontSize="small"/>
          <TwitterIcon fontSize="small"/>
          <InstagramIcon fontSize="small"/>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="course" element={<Course />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
