import React from "react";
import styles from "./LeftEye.module.scss";

const LeftEye = props => {
  const { img } = props;

  return (
    <>
      <img className={styles.left} src={img} alt="{img}" />
    </>
  );
};

export default LeftEye;
