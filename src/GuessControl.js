import React, { Component } from "react";
import Button from "./Button";
import React, { useState } from 'react';




function GuessControl(props){

  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
         setCurrentGuess(event.target.value) }

  function onSubmitGuess(event) {
    props.onGuess(Number(currentGuess));
    setCurrentGuess({ currentGuess: "" });
  }
  return(
  
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      
  
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  )
 
}




export default GuessControl;
