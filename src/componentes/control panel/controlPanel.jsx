import React,{ useEffect, useState } from "react";
import "./controlPanel.css";
import Timer from "../timer/timer";


export default function ControlPanel({
  onLevelChange,
  gameStarted,
  handleClick,
  bombs,
  flags,
  gameOver,
  revelar
}) {

  return (
    <div id="controlPanelContainer">
      <div className="btns">
        <button className="levelBtn" onClick={() => onLevelChange("1")}>
          Básico (9x9)
        </button>
        <button className="levelBtn" onClick={() => onLevelChange("2")}>
          Intermédio (16x16)
        </button>
        <button className="levelBtn" onClick={() => onLevelChange("3")}>
          Avançado (30x16)
        </button>
        <button className="restartBtn" onClick={handleClick}>
          Reiniciar Jogo
        </button>
        <button className="restartBtn" onClick={revelar}>
          Revelar tabuleiro
        </button> 
      </div>
      <div className="itemsPanel">
        <dl className="items">
            <dt><img src="imagens/relogio.png" width={50} alt="relogio"/></dt>
            <dd id="gameTime"><Timer gameStarted={gameStarted} gameOver={gameOver}/></dd>
        </dl>
        <dl className="items">
            <dt><img src="imagens/redflag.png" width={50} alt="red flag"/></dt>
            <dd id="flags">{bombs-flags}</dd>
        </dl>
      </div> 
    </div>
  );
}
