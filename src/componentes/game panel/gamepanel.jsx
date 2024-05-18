import React, { useState } from "react";
import Cell from "../cell/cell";
import "./gamepanel.css";

export default function GamePanel({
  board,
  level,
  handleClick,
  arrayBoard,
  placeFlag,
  gameOver,
}) {
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
    if (
      arrayBoard.length * arrayBoard[0].length ==
      board.nColumns * board.nLines
    ) {
      for (let i = 0; i < board.nLines; i++) {
        let linha = [];
        for (let j = 0; j < board.nColumns; j++) {
          linha.push(
            <Cell
              handleClick={handleClick}
              placeFlag={placeFlag}
              key={`${i}-${j}`}
              x={j}
              y={i} //coordenadas cartesianas
              cell={arrayBoard[i][j]}
              gameOver={gameOver}
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
    }
    //console.log(newCells)
    return newCells;
  };

  return <div className={`game-panel ${gameClass}`}>{CreateBoard()}</div>;
}
