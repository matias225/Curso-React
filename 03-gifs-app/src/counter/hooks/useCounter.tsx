import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleAdd = () => {
    setCounter(prevState => prevState + 1);
  };

  const handleReset = () => {
    setCounter(initialValue)
  };

  return {
    // Properties
    counter,

    // Mehtods / Actions
    handleAdd,
    handleSubtract,
    handleReset
  }
}
