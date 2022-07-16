import React, {useState} from "react";


// Here are some questions from Thinking in React (Links to an external site.) that will help us decide if we need state:

// Is it passed in from a parent via props? If so, it probably isn’t state.
// Can you compute it based on any other state or props in your component? If so, it isn’t state.
// Does it remain unchanged over time? If so, it probably isn’t state.
// Since this component isn't being passed any props that will let us display some new button text, and the button's text is dynamic (it changes), we definitely need to add state!


function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";

  return <button style={{background : color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}
export default Toggle;
