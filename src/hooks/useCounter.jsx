import { useState } from "react";

export const useCounter = (valor = 0) => {
  const [counter, setCounter] = useState(valor);

  const sumar = (v = 1) => {
    setCounter(counter + v);
  };

  const restar = () => {
    if(counter == 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(valor);
  };

  return {
    counter,
    sumar,
    restar,
    reset,
  };
};