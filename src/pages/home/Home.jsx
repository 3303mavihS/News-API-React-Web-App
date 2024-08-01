import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Sliders from "../../components/sliders/Sliders";
import Card from "../../components/card/Card";
import axios from "axios";
import LoaderSpinner from "../../components/spinner/LoaderSpinner";
import PrevNextButton from "../../components/prevnextbutton/PrevNextButton";
import { useParams } from "react-router-dom";

const Home = () => {
  const [result, setResult] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startingPoint, setStartingPoint] = useState(3);
  const [endPoint, setEndPoint] = useState(12);
  const { code } = useParams();
  // console.log(code);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${
    !code ? "in" : code
  }&apiKey=${API_KEY}`;
  // console.log(url);
  // Using Axios library to fetch data from url
  const getResult = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setResult(data.articles);
      setSliderData(data.articles.slice(0, 3)); // Set slider data with first 5 articles
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false); // Ensure loading is stopped in case of error
    }
  };

  // useEffect to load the data on load
  useEffect(() => {
    getResult();
  }, [url]);

  //prevButton handle
  const handlePrev = () => {
    if (startingPoint > 3) {
      setStartingPoint(startingPoint - 9);
      setEndPoint(endPoint - 9);
    } else {
      setStartingPoint(3);
      setEndPoint(12);
    }
  };

  //nextButton handle
  const handleNext = () => {
    if (endPoint <= result.length) {
      setStartingPoint(startingPoint + 9);
      setEndPoint(endPoint + 9);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeDiv}>
        <div className={styles.slidersDiv}>
          <Sliders data={sliderData} />
        </div>
        <div className={styles.blogDiv}>
          <div className={styles.resultDiv}>
            <h2>Top Headlines</h2>
            {loading && <LoaderSpinner />}
            {!loading && (
              <div className={styles.resultBox}>
                {(!result || result.length === 0) && (
                  <h4>No Results Found!!!</h4>
                )}
                {result &&
                  result
                    .slice(startingPoint, endPoint)
                    .map((item, index) => <Card key={index} {...item} />)}
              </div>
            )}

            {result && (
              <div className={styles.bottomDiv}>
                <PrevNextButton
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
