import React from "react";
import Counter, { someInfo } from "./Counter";
import "./styles.css";
document.a = 5;

export default function App() {
  return (
    <div className="App">
      <div>{someInfo}</div>
      <div>{someInfo}</div>
      <Counter />
      <Counter />
    </div>
  );
}
