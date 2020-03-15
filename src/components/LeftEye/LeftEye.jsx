import React from "react";
import styles from "./LeftEye.module.scss";

const LeftEye = props => {
  const { img, spin } = props;

  return (
    <>
      <img className={`${styles.left} ${spin}`} src={img} alt="{img}" />
    </>
  );
};

export default LeftEye;
