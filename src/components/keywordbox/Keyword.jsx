import React from "react";
import styles from "./Keyword.module.css";
import { useNavigate } from "react-router-dom";

const Keyword = ({ code, country }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.keywordDiv}
      onClick={() => {
        // console.log(country + " Clicked");
        navigate(`/${code}`);
      }}
    >
      {country}
    </div>
  );
};

export default Keyword;
