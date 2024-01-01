import React from "react";
import { useRef } from "react";
import { useState } from "react";
import './InputStyle.css'

export default function Input({employName}) {
    
  const [enteredName, setEnteredName] = useState("");
  const userName = useRef();


  function handleClick() {
    setEnteredName(userName.current.value);

  }

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="name">
            <label> {employName} </label>
            
          </div>
          <input ref={userName} type="text" />
          <button onClick={handleClick}> Submit </button>
        </div>
        <div className="right">
          <h1> {enteredName ?? "Set Name"} </h1>
        </div>
      </div>
    </>
  );
}
