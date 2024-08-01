import React, { useContext } from "react";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import styles from "./DarkModeButton.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeButton = () => {
  const currentTheme = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        value={currentTheme}
      />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <IoMdSunny className={styles.lightMode} />
        <BsMoonStarsFill className={styles.darkMode} />
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};

export default DarkModeButton;
