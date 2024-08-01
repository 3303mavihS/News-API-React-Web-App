import React from "react";
import styles from "./CatergoryKeyword.module.css";

const CatergoryKeyword = ({ keyword, countryClicked }) => {
  return (
    <div
      className={styles.keywordDiv}
      onClick={() => {
        // console.log(keyword + " Clicked");
        // navigate(`${keyword}`);
        countryClicked(keyword);
      }}
    >
      {keyword}
    </div>
  );
};

export default CatergoryKeyword;
