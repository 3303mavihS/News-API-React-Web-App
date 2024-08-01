import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";
import Card from "../../components/card/Card";
import CountryKeyword from "../../components/catergorykeyword/CatergoryKeyword.jsx";
import LoaderSpinner from "../../components/spinner/LoaderSpinner";
import PrevNextButton from "../../components/prevnextbutton/PrevNextButton";
import CatergoryKeyword from "../../assets/data/categorykeyword.js";

const Categories = () => {
  const data = CatergoryKeyword;
  const [category, setcategory] = useState("politics");
  const [country, setCountry] = useState("in");
  const [result, setResult] = useState("");
  const [startingPoint, setStartingPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(12);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;
  const cat_con_url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}`;
  // console.log(url);
  // console.log(process.env.REACT_APP_NEWS_API_KEY);

  // Using Axios library to fetch data from url
  const getResult = async () => {
    setLoading(true);
    try {
      const { data } = await axios(cat_con_url);
      setResult(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false); // Ensure loading is stopped in case of error
    }
  };

  // useEffect to load the data on load
  useEffect(() => {
    getResult();
  }, [cat_con_url]);

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

  //category clicked handle
  const handleClicked = (categoryclicked) => {
    setcategory(categoryclicked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.history}>
        <div className={styles.historyDiv}>
          <h3>Category : {category}</h3>
          <br />
          {data.map((countryName, index) => (
            <CountryKeyword
              key={index}
              keyword={countryName}
              countryClicked={handleClicked}
            />
          ))}
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.resultDiv}>
          {loading && <LoaderSpinner />}
          {!loading && (
            <div className={styles.resultBox}>
              {(!result || result.length === 0) && <h4>No Results Found!!!</h4>}

              {result &&
                result
                  .slice(startingPoint, endPoint)
                  .map((item, index) => <Card key={index} {...item} />)}
            </div>
          )}
          {result && (
            <div className={styles.bottomDiv}>
              <PrevNextButton handlePrev={handlePrev} handleNext={handleNext} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
