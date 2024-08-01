import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import styles from "./EmptyImage.module.css";

const EmptyImage = () => {
  return (
    <div className={styles.container}>
      <FaNewspaper className={styles.logo} />
      <h2>News API</h2>
    </div>
  );
};

export default EmptyImage;
