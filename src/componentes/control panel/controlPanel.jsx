import React,{ useEffect, useState } from "react";
import "./controlPanel.css";
import Timer from "../timer/timer";

export default function ControlPanel({
  onLevelChange,
  startClock,
  handleClick,
}) {
  const [gameStarted, setGameStarted] = useState(startClock);

    useEffect(()=> {
        setGameStarted(startClock)      //sempre q o startclock é alterado o game started também
    }, [startClock])
  

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
      </div>
      <div className="itemsPanel">
        <dl className="items">
          <dt><img src="../../public/imagens/redfag.png"/>Tempo de Jogo:</dt>
          <dd id="gameTime">{gameStarted ? <Timer /> : "0"}s</dd>
        </dl>
        <dl className="items">
          <dt>Bandeiras:</dt>
          <dd id="flags">x</dd>
        </dl>
      </div>
    </div>
  );
}
