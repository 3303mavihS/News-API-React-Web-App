import React from "react";
import styles from "./HistoryKeyword.module.css";

const HistoryKeyword = ({ keyword }) => {
  //   const navigate = useNavigate();
  return <div className={styles.keywordDiv}>{keyword}</div>;
};

export default HistoryKeyword;
