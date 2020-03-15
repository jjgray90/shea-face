import React from "react";
import styles from "./RightEye.module.scss";

const RightEye = props => {
  const { img, spin } = props;

  return (
    <>
      <img className={`${styles.right} ${spin}`} src={img} alt="{img}" />
    </>
  );
};

export default RightEye;
