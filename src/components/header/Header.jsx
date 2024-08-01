import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaNewspaper } from "react-icons/fa6";
import Navbar from "../navbar/Navbar";
import DarkModeButton from "../darkmodebutton/DarkModeButton";
import Keyword from "../keywordbox/Keyword";
import CountryKeyword from "../../assets/data/countrykeyword.js";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const data = CountryKeyword;
  // console.log(data);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.logoDiv}>
          <FaNewspaper className={styles.logo} />
          <h2>News API</h2>
        </div>
        <div className={styles.menuDiv}>
          <DarkModeButton />
          <Navbar handleToggle={handleToggle} />
        </div>
      </div>
      <div
        className={`${styles.onHover} ${toggle ? styles.active : styles.hide}`}
      >
        <div className={styles.contentDiv}>
          {data.map((country) => (
            <Keyword {...country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
