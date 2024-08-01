import React from "react";
import styles from "./SliderCard.module.css";
import background from "../../assets/images/background.jpg";
const SliderCard = ({ title, url, urlToImage, content }) => {
  return (
    <div
      className={styles.sliderCard}
      style={{
        backgroundImage: `url(${!urlToImage ? background : urlToImage})`,
      }}
    >
      <a href={url} target="blank">
        <div className={styles.contentContainer}>
          <h3>{!title ? "Title" : title}</h3>
          <p>{!content ? "" : content}</p>
        </div>
      </a>
    </div>
  );
};

export default SliderCard;
