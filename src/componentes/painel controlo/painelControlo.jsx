import { useState } from 'react';
import React from "react";
import './painelControlo.css'

export default function PainelControlo(){

    /*const [nivelJogo, setNivelJogo] = useState("básico");*/

    return(
        <div className="painel-controlo">
            <div className='info2'>Nível de Jogo:
                <select >
                        <option selected value="0">Seleccione...</option>
                        <option value="1">Básico (9x9)</option>
                        <option value="2">Intermédio (16x16)</option>
                        <option value="3">Avançado (30x16)</option>
                </select>
            </div>
            
            
            <div className='info2'>
                <div className='info'>
                    <img src="/imagens/relogio.png" className='imagens'></img>
                    <div className='texto'>"tempo"</div>
                </div>
                <div className='info'>
                    <img src="/imagens/redflag.png" className='imagens'></img>
                    <div className='texto'>"n bandeiras"</div>
                </div>
            </div>
            
        </div>
    )
}