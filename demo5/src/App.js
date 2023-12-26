import React, { useState } from "react";

import './App.css';


function FavoriteCars() {
  const [cars, setCars] = useState("BMW");

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <>
        <h1 style={{ color: "red", backgroundColor: 'green' }}>CSS Inline Styling</h1>

        <h2 style={mystyle}>Internal CSS</h2>

        <h3>External CSS</h3>
      </>
      <br></br>
      <>
      <h1>React Hook EX:</h1>
      <h2>My favorite car is {cars}!</h2>
      <button
        type="button"
        onClick={() => setCars("KIA")}
      >KIA</button>
      <button
        type="button"
        onClick={() => setCars("BMW")}
      >BMW</button>
      <button
        type="button"
        onClick={() => setCars("HONDA")}
      >HONDA</button>
      <button
        type="button"
        onClick={() => setCars("TATA")}
      >TATA</button>
      </>
    </>
  );
}

export default (FavoriteCars);