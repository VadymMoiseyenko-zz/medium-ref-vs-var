import React, { useRef, useState } from "react";

export const someInfo = Math.floor(Math.random() * 10000); // this variable which will be the same for each instance of component

console.log(123213213); // this console log which will be called when var will be init
console.log(document.a);

export default function Counter() {
  const variableRef = useRef(Math.floor(Math.random() * 10000));
  const variable = Math.floor(Math.random() * 10000);
  const [variableJustForRerender, setVariableJustForRerender] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <div>Number from ref {variableRef.current}</div>{" "}
      {/*this variable will be the same in each rerender but different for different components*/}
      <div>Number from variable outside component {someInfo}</div>{" "}
      {/*this variable which will be the same for each instance of component*/}
      <div>Number from variable {variable}</div>{" "}
      {/*this variable will be reinit each time*/}
      <div>Number from variable {variableJustForRerender}</div>
      <button
        onClick={() => setVariableJustForRerender((prevState) => prevState + 1)}
      >
        +
      </button>
      <button
        onClick={() => setVariableJustForRerender((prevState) => prevState - 1)}
      >
        -
      </button>
    </>
  );
}
