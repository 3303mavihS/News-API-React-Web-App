import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ handleToggle }) => {
  return (
    <div className={styles.menu}>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/categories">Categories</Link>
      <Link
        onClick={() => {
          handleToggle();
        }}
      >
        Filter By Country
      </Link>
      <button className={styles.button}>Refresh</button>
    </div>
  );
};

export default Navbar;
