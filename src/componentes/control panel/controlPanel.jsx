import { useState } from 'react';
import React from "react";
import './controlPanel.css'

export default function ControlPanel({onLevelChange}){

    /*const [nivelJogo, setNivelJogo] = useState("básico");*/
    
    return(
        <div>
            <button className="levelBtn" onClick={() => onLevelChange('1')} >Básico (2x3)</button>
            <button className="levelBtn" onClick={() => onLevelChange('2')} >Intermédio (3x4)</button>
            <button className="levelBtn" onClick={() => onLevelChange('3')} >Avançado (4x5)</button>
        </div>
    )      
    
}