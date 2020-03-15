import React from "react";
import styles from "./App.module.scss";
import SheaFace from "./components/SheaFace";
import shea from "./Assets/shea.png";


const App = () => {
  return (
    <div className={styles.fullFace}>
      <SheaFace img={shea} />
    </div>
  );
};

export default App;
