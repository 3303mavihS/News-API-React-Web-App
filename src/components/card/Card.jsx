import React from "react";
import styles from "./Card.module.css";
import EmptyImage from "../emptyImage/EmptyImage";

const Card = ({ title, url, urlToImage, content }) => {
  return (
    <div className={styles.container}>
      <a href={url} target="blank">
        <div className={styles.cardDiv}>
          {!urlToImage ? <EmptyImage /> : <img src={urlToImage} alt={title} />}
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
