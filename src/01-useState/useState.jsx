import { useState } from "react";

export const CounterApp = () => {
  const [contador, setContador] = useState({
    contador1: 10,
    contador2: 20,
    contador3: 30,
  });

  const {contador1, contador2, contador3} = contador;

  return (
    <div>
      <h1>Contador {contador1}</h1>
      <h1>Contador {contador2}</h1>
      <h1>Contador {contador3}</h1>
      <button
        className="btn btn-primary"
        //Usar el operador spread (...) para llamar a todos los elementos del objeto
        onClick={() => setContador({...contador, contador1: contador1 + 1})}
      >
        Sumar
      </button>
    </div>
  );
};
