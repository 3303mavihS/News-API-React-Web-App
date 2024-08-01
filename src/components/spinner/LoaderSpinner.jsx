import React from "react";
import styles from "./LoaderSpinner.module.css";

const LoaderSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ldsCircle}>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
