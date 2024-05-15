import React, { useState } from "react";
import Cell from "../cell/cell";
import "./gamepanel.css";

export default function GamePanel({ board, level, handleClick, arrayBoard }) {
  let gameClass;
  switch (level) {
    case "1":
      gameClass = "basic";
      break;
    case "2":
      gameClass = "intermedio";
      break;
    case "3":
      gameClass = "avancado";
      console.log(board);
      break;
    default:
      gameClass = "basic";
  }

  const CreateBoard = () => {
    const newCells = [];
    for (let i = 0; i < board.nLines; i++) {
      let linha = [];
      for (let j = 0; j < board.nColumns; j++) {
        linha.push(
          <Cell
            handleClick={handleClick}
            key={`${i}-${j}`}
            x={j}
            y={i}     //coordenadas cartesianas
            cell={arrayBoard[i][j]}
          />
        );
      }
      let linhaClass = i % 2 === 0 ? " par " : " impar ";
      newCells.push(
        <div key={i} className={`linha ${linhaClass}`}>
          {linha}
        </div>
      );
    }
    //console.log(newCells)
    return newCells;
  };

  return <div className={`game-panel ${gameClass}`}>{CreateBoard()}</div>;
}
