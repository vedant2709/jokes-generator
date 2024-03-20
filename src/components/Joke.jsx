import React, { useState } from "react";
import styles from "./Joke.module.css";
import Button from "./Button";

export default function Joke() {
  const [Joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className={styles.joke}>
      <Button callApi={fetchApi} />
      <div className={styles.jokecontainer}>
        <p>{Joke}</p>
      </div>
    </div>
  );
}
