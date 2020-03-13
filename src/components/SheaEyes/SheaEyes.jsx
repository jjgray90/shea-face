import React from "react";
import styles from "./SheaEyes.module.scss";
import LeftEye from "../LeftEye";
import RightEye from "../RightEye";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";

const SheaEyes = () => {
  return (
    <div className={styles.eye}>
      <LeftEye img={left} />
      <RightEye img={right} />
    </div>
  );
};

export default SheaEyes;
