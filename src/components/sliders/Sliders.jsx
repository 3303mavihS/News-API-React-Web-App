import React, { useState } from "react";
import styles from "./Sliders.module.css";
import {
  TbSquareRoundedArrowLeftFilled,
  TbSquareRoundedArrowRightFilled,
} from "react-icons/tb";
import SliderCard from "../sliderCard/SliderCard";

const Sliders = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <TbSquareRoundedArrowLeftFilled
        className={styles.left}
        onClick={handlePrevClick}
      />
      {data.length === 0 && <div className={styles.noDataDiv}></div>}
      {data.map((item, index) => (
        <div
          className={styles.activeSlide}
          key={index}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <SliderCard {...item} />
        </div>
      ))}

      <TbSquareRoundedArrowRightFilled
        className={styles.right}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default Sliders;
