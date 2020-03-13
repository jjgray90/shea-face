import React from "react";
import styles from "./App.module.scss";
import shea from "./Assets/shea.png";
import SheaFace from "./components/SheaFace";

const App = () => {
  return (
    <>
      <div className={styles.fullFace}>
        <SheaFace img={shea} />
      </div>
    </>
  );
};

export default App;
