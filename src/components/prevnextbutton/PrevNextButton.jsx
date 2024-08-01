import styles from "./PrevNextButton.module.css";
const PrevNextButton = ({ handlePrev, handleNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={handlePrev}>
          Previous
        </button>
        <button className={styles.button} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PrevNextButton;
