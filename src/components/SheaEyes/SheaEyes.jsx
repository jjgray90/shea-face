import React, { useState } from "react";
import styles from "./SheaEyes.module.scss";
import LeftEye from "../LeftEye";
import RightEye from "../RightEye";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";

const SheaEyes = () => {
  const [eyesStart, rotateEyes] = useState(true);
  const spinEyes = eyesStart ? "" : styles.rotate;
  return (
    <div className={styles.eye} onClick={() => rotateEyes(!eyesStart)}>
      <LeftEye img={left} spin={spinEyes} />
      <RightEye img={right} spin={spinEyes} />
    </div>
  );
};

export default SheaEyes;
