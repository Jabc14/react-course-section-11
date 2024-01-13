import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((num) => {
    setCounter((value) => value + num);
  }, []);
  // const increment = () => {
  //     setCounter( counter + 1);
  // }

  return (
    <>
      <h1>Callback Hook: {counter}</h1>

      <ShowIncrement increment={increment} />
    </>
  );
};
