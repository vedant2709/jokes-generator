import React from "react";
import "./App.css";
import Joke from "./components/Joke";

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">Joke Generator Using React and Joke API</h1>
      <Joke />
    </div>
  );
}
