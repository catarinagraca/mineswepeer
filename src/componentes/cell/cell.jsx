import React ,{ useState }from "react";
import './cell.css';

export default function Cell({handleClick,x,y, cell}){

    const handleCellClick=()=>{
        handleClick(x,y)
    }

    return(
        <button className="quadrado" onClick={handleCellClick}>{cell.bomb ? <img src="imagens/redflag.png" width={20} alt="flag" /> : ''}</button>
    )
}