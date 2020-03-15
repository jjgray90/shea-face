import React from "react";
import styles from "./SheaFace.module.scss";
import SheaEyes from "../SheaEyes";
import { useState } from "react"

const SheaFace = props => {
  const { img, spin } = props;

  
  return (
    <>
      <img className={styles.face} src={img} alt="{img}" />
      <div className={styles.eyes}>
        <SheaEyes />
      </div>
    </>
  );
};

export default SheaFace;
