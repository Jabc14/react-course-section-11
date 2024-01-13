import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./MessageMontado";

export default function SimpleForm() {

  const { formState, onChange, onReset } = useForm({
    nombre: "",
    email: "",
    psw: "",
  });

  const { nombre, email, psw } = formState;

  useEffect(() => {
      console.log('use effect')
  }, [psw])

  useEffect(() => {
      console.log('nombre')
  }, [nombre])

  useEffect(() => {
      console.log('email')
  }, [email])

  return (
    <>
      <h1>Form</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Jabc"
        name="nombre"
        value={nombre}
        onChange={onChange}
      />

      <input
        type="enail"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="●●●●●"
        name="psw"
        value={psw}
        onChange={onChange}
      />
      {/* {nombre ==='Jose' && <Message/>} */}

<button onClick={ onReset } className="btn btn-primary">Limpiar</button>
    </>
  );
}
