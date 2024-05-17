import React ,{ useState }from "react";
import './cell.css';

export default function Cell({handleClick,x,y, cell}){

    const handleCellClick=()=>{
        handleClick(x,y)
    }

    return(
        <button className="quadrado" onClick={handleCellClick}>{cell.bomb ? <img src="imagens/bombs.png" width={25} alt="flag" /> : cell.proximityBombs ? cell.proximityBombs : " "}</button>
    )
}