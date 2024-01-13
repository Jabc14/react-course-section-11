import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function CustomHooks() {
  const { counter, sumar, restar, reset } = useCounter();

  return (
    <>
      <h1>Contador {counter}</h1>

      <button className="btn btn-success" onClick={() => sumar(2)}>
        Sumar
      </button>
      <button className="btn btn-danger" onClick={restar}>
        Restar
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
}
