import React from "react";
import styles from "./Button.module.css";

export default function Button({ callApi }) {
  return (
    <button onClick={callApi} className={styles.button}>
      Click to generate joke
    </button>
  );
}
