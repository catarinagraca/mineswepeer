import React, { useState, useEffect } from "react";
import "./cell.css";

export default function Cell({ handleClick, x, y, cell, placeFlag, gameOver }) {
  let cellClass = "quadrado";
  if (cell.clicked) {
    cellClass += " clicked ";
  }

  let displayValue;

  if (cell.clicked) {
    if (cell.bomb) {
      displayValue = "💥"; //💣
    } else if (cell.promixityBombs) {
      displayValue = cell.promixityBombs;
      cellClass += ` nBombas${cell.promixityBombs} `;
    } else {
      displayValue = " ";
    }
  } else {
    if (cell.flag === 1) {
      displayValue = "🚩";//<img src="imagens/redflag.png" width={25} height={20}/>
    } else if (gameOver && cell.bomb) {
      displayValue = <img src="imagens/bombs.png" width={25} height={25}/>//"💣";
    } else if (!gameOver && cell.flag === 2) {
      displayValue = "?";
      cellClass += " possibleBomb";
    } else {
      displayValue = " ";
    }
  }
  const handleFlag = (event) => {
    if (event.preventDefault !== undefined) event.preventDefault();
    if (event.stopPropagation !== undefined) event.stopPropagation();
    placeFlag(x, y); // tem que ser o nome da tua funcao
  };

  const handleCellClick = () => {
    handleClick(x, y);
  };

  useEffect(() => {
    if (cell.clicked) {
      //sempre q o estado da célula mudar chama o handle click
      handleCellClick();
      // console.log('pro caralho');
    }
  }, [cell.clicked]);

  return (
    <button
      className={cellClass}
      onClick={handleCellClick}
      onContextMenu={handleFlag}
    >
      {displayValue}
    </button>
  );
}
