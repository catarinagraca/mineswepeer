import React, { useState } from "react";
import Cell from "../cell/cell";
import './gamepanel.css'

export default function GamePanel({board,level}) {

    let gameClass;
    switch (level) {
        case '1':
            gameClass='basic'
            break
      case '2':
        gameClass='intermedio'
        break;
      case '3':
        gameClass='avancado'
        break;

    }


    const CreateBoard = () => {
        const newCells=[]
        console.log(board)
        for (let i = 0; i < board.nLines; i++) {
            for (let j = 0; j < board.nColumns; j++) {
                newCells.push(<Cell key={`${i}-${j}`} />); //para ter o numero da celula
            }
        }
        return newCells;
    };
    
  return (
    <div className={`game-panel ${gameClass}`} >{CreateBoard()}</div>
  )
}
