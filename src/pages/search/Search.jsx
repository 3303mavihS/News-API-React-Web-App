import React, { useState } from "react";
import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import Card from "../../components/card/Card";
import HistoryKeyword from "../../components/historykeyword/HistoryKeyword";
import LoaderSpinner from "../../components/spinner/LoaderSpinner";
import PrevNextButton from "../../components/prevnextbutton/PrevNextButton";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("");
  const [startingPoint, setStartingPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(12);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [history, setHistory] = useState([]);
  const url = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${API_KEY}`;
  // console.log(url);
  // console.log(process.env.REACT_APP_NEWS_API_KEY);

  // Fetching Results from the url on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data.articles))
      .catch((error) => console.log(error));
    setLoading(false);
    // Update history
    setHistory((prevHistory) => [...prevHistory, searchInput]);
  };
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
      <div className={styles.history}>
        <div className={styles.historyDiv}>
          <h2>Search History</h2>
          <br />
          <p>keywords : </p>
          <br />
          {history.map((recent, index) => (
            <HistoryKeyword key={index} keyword={recent} />
          ))}
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.searchDiv}>
          <h1>Search By Keyword</h1>
          <p>
            Discover news related to your favourite topics. Keywords or phrases
            to search for in the article title and body.
          </p>
          <div className={styles.searchBox}>
            <BiSearchAlt className={styles.seachIcon} />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  // console.log(e.target.value);
                }}
                placeholder="Enter Keyword"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={styles.resultDiv}>
          <h2>Search Results</h2>
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

export default Search;
