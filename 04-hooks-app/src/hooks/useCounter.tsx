import { useState } from "react";

export const useCounter = (inititalValue: number = 1) => {

  const [counter, setCounter] = useState(inititalValue);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  }

  return {
    // Props
    counter,

    // Mehtods
    increment,
    decrement,
  }
}
