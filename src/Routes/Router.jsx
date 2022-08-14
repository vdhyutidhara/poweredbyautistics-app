import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Components/Main/Home";
import Course from "../Components/Main/Course";
import Blog from "../Components/Main/Blog";
import About from "../Components/Main/About";

import styles from "./Router.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";

// Active Link styling
let activeStyle = {
  fontWeight: "700",
  color: "#05a7d0",
};

// Links Object
const links = [
  { to: "/", title: "Home" },
  { to: "/course", title: "Course" },
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
          <FacebookIcon fontSize="small" />
        </div>
      </nav>
      <hr className={styles.horLineStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="course" element={<Course />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
