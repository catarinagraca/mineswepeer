import { useState } from "react";
import "./App.css";
import Cell from "./componentes/cell/cell";
import ControlPanel from "./componentes/control panel/controlPanel";
import GamePanel from "./componentes/game panel/gamepanel";

function App() {
  const [board, setBoard] = useState({});
  const [level, setLevel] = useState("1");

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
  };
  console.log(board);
  const handleLevelChange = (event) => {
    console.log(event);
    setLevel(event);
    changeBoard(event);
  };

  return (
    <div>
      <ControlPanel onLevelChange={handleLevelChange} ></ControlPanel>
      <GamePanel board={board} level={level}></GamePanel>
    </div>
    // <Cell></Cell>
  );
}

export default App;
