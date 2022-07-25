import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Components/Main/Home";
import Contact from "../Components/Main/Contact";
import Course from "../Components/Main/Course";
import Blog from "../Components/Main/Blog";
import About from "../Components/Main/About";

import styles from "./Router.module.css";

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
  { to: "/contact", title: "About" },
];

// Routes Object

export default function Router() {
  return (
    <div>
      <nav className={styles.navig}>
        {links &&
          links?.map((link) => (
            <NavLink
              to={link.to}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {link.title}
            </NavLink>
          ))}
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
