import React from "react";
import { useEffect, useState } from "react";

export default function Timer({ onTimer}) {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Retorna uma função de limpeza que será executada quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // O segundo argumento vazio faz com que este efeito só seja executado uma vez, após a montagem do componente


  return <>{seconds}</>;
}
