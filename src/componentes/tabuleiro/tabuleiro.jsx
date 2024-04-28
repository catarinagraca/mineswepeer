import React from "react";
import Quadrado from "../quadrado/quadrado";
import "./tabuleiro.css";



export default function Tabuleiro(){
    
     // Cria um array com a quantidade de quadrados por linha
    const quadradosPorLinha = Array.from({ length: 9 }, (_, index) => index);

    return (
        <div className="tabuleiro">
            {/* Gera as linhas do tabuleiro */}
            {quadradosPorLinha.map((linha) => (
                <div key={linha} className="linha">
                    {/* Gera os quadrados de cada linha */}
                    {quadradosPorLinha.map((quadrado) => (
                        <Quadrado key={quadrado}></Quadrado>
                    ))}
                </div>
            ))}
        </div>)
        
    
}