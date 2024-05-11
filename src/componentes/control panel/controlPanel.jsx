import { useState } from 'react';
import React from "react";
import './controlPanel.css'
import Timer from '../timer/timer';

export default function ControlPanel({onLevelChange}){


    const [gameStarted, setGameStarted] = useState(false);
    

    const handleTimer = () => {
      setGameStarted(true);
    };
  
    /*const [nivelJogo, setNivelJogo] = useState("básico");*/
    
    return(
        <div>
            <div className='btns'>
                <button className="levelBtn" onClick={() => onLevelChange('1')} >Básico (9x9)</button>
                <button className="levelBtn" onClick={() => onLevelChange('2')} >Intermédio (16x16)</button>
                <button className="levelBtn" onClick={() => onLevelChange('3')} >Avançado (30x16)</button>
                <button className='startBtn' onClick={handleTimer}>Iniciar Jogo</button> 
            </div>
            <dl className='itemsPanel' >
                <dt>Tempo de Jogo:</dt>
                <dd id="gameTime">{gameStarted ? <Timer /> : '0'}s</dd> 
            </dl>
        </div>
    )       
    
}