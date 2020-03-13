import React from "react";
import styles from "./RightEye.module.scss";

const RightEye = props => {
  const { img } = props;

  return (
    <>
      <img className={styles.right} src={img} alt="{img}" />
    </>
  );
};

export default RightEye;
