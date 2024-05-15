import { useState } from "react";
import "./App.css";
import Cell from "./componentes/cell/cell";
import ControlPanel from "./componentes/control panel/controlPanel";
import GamePanel from "./componentes/game panel/gamepanel";
import Header from "./componentes/header/header";

function App() {
  const [board, setBoard] = useState({    //board dos niveis
    nLines: 9,
    nColumns: 9,
    nBombs: 10,
  });
  const [level, setLevel] = useState("1");
  const [gameStarted, setGameStarted] = useState(false);

  const [arrayBoard, setArrayBoard] = useState(() => {      //board bidimensional com bombas, etc...
    const initalBoard = Array.from({ length: board.nLines }, () =>
      Array.from({ length: board.nColumns }, () => ({
        bomb: false,
        flag: false,
        clicked: false,
        promixityBombs: 0,
      }))
    );
    return initalBoard;
  });

 const handleClick=(x,y)=>{
  console.log(x+','+y);
  setGameStarted(true)
  if (!gameStarted) {
    spawnBomb()
  } 
  
 }

  const handleResetGame = () => {
     setGameStarted(false);
     setArrayBoard(() => {      //board bidimensional com bombas, etc...
      const initalBoard = Array.from({ length: board.nLines }, () =>
        Array.from({ length: board.nColumns }, () => ({
          bomb: false,
          flag: false,
          clicked: false,
          promixityBombs: 0,
        }))
      );
      return initalBoard;
    });
     
     
     };

  const changeBoard = (level) => {
    let newBoard = {};
    switch (level) {
      case "1":
        newBoard = {
          nLines: 9,
          nColumns: 9,
          nBombs: 10,
        };
        break;
      case "2":
        newBoard = {
          nLines: 16,
          nColumns: 16,
          nBombs: 40,
        };
        break;
      case "3":
        newBoard = {
          nLines: 16,
          nColumns: 30,
          nBombs: 99,
        };
        break;
    }
    setBoard(newBoard);
    changeArrayBoard(newBoard);
    //setarrayBoard(newBoard)
  };
  const changeArrayBoard = (board) => {
    const newArrayBoard = Array.from({ length: board.nLines }, () =>
      Array.from({ length: board.nColumns }, () => ({
        bomb: false,
        flag: false,
        clicked: false,
        promixityBombs: 0,
      }))
    );
    setArrayBoard(newArrayBoard);
    return newArrayBoard;
  };

  const handleLevelChange = (event) => {  //event=nivel
    setLevel(event);
    changeBoard(event);
    
  };

  const spawnBomb = () => {
    let bombs = 0;
    const newBoard = [...arrayBoard];

    while (bombs < board.nBombs) {
      const x = Math.floor(Math.random() * board.nLines);   //gera posições aleatorias
      const y = Math.floor(Math.random() * board.nColumns);

      if (!newBoard[x][y].bomb) {
        newBoard[x][y].bomb = true; // Marca a posição como uma bomba
        bombs++; // Adiciona a bomba à lista de bombas
      }
    }
    console.log("bombas geradas");
    setArrayBoard(newBoard);
  };

  

  return (
    <div id="container">
      <Header></Header>
      <ControlPanel
        onLevelChange={handleLevelChange}
        handleClick={handleResetGame}
        startClock={gameStarted}

        //onGameStart={handleGameStart}
      ></ControlPanel>
      <GamePanel board={board} arrayBoard={arrayBoard} level={level} handleClick={handleClick}></GamePanel>
      {console.log(arrayBoard)}
    </div>
    // <Cell></Cell>
  );
}

export default App;
