import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./componentes/cell/cell";
import ControlPanel from "./componentes/control panel/controlPanel";
import GamePanel from "./componentes/game panel/gamepanel";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer.component";

function App() {
  const [board, setBoard] = useState({
    //board dos niveis
    nLines: 9,
    nColumns: 9,
    nBombs: 10,
  });
  const [level, setLevel] = useState("1");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [placedFlags, setPlacedFlags] = useState(0);
  //board bidimensional com bombas, etc...
  const initalBoard = (estado) => {
    return Array.from({ length: estado.nLines }, () =>
      Array.from({ length: estado.nColumns }, () => ({
        bomb: false,
        flag: 0,
        clicked: false,
        promixityBombs: 0,
      }))
    );
  };
  const [arrayBoard, setArrayBoard] = useState(() => initalBoard(board));
  const [displayValue,setDisplayValue]=useState('');
  useEffect(() => {
    setArrayBoard(initalBoard(board));
    setGameStarted(false);
    setGameOver(false);
    setPlacedFlags(0);
  }, [board]);

  const nearbyCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const [boardRevealed,setBoardRevealed]=useState(false)
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
        flag: 0,
        clicked: false,
        promixityBombs: 0,
      }))
    );
    setArrayBoard(newArrayBoard);
    return newArrayBoard;
  };

  const handleResetGame = () => {
    setGameOver(false);
    setGameStarted(false);
    setArrayBoard(initalBoard(board));
  };

  const gameWin = () => {
    let openCells = 0;
    let countFlags = 0;
    if (
      arrayBoard.length * arrayBoard[0].length ==
      board.nColumns * board.nLines
    ) {
      for (let x = 0; x < board.nLines; x++) {
        for (let y = 0; y < board.nColumns; y++) {
          if (arrayBoard[x][y].clicked) {
            openCells++;
          }
          if (arrayBoard[x][y].flag == 1) {
            countFlags++;
          }
        }
      }
      if (board.nColumns * board.nLines - board.nBombs == openCells) {
        //alert("ganhaste");
        setDisplayValue('GANHASTE!!!')
         setTimeout(() => {
      setDisplayValue(''); 
    }, 5000);
        setGameOver(true);
      }
    }
    setPlacedFlags(countFlags);
  };

  const placeFlag = (x, y) => {
    const newBoard = [...arrayBoard];
    if (newBoard[y][x].clicked == false) {
      newBoard[y][x].flag++;
      if (newBoard[y][x].flag == 3/*4*/) {
        newBoard[y][x].flag = 0;
      }
      console.log(newBoard[y][x].flag);
    }
    setArrayBoard(newBoard);
  };

  const handleClick = (x, y) => {
    if (!gameOver && !arrayBoard[y][x].flag) {
      if (!gameStarted) {
        setGameStarted(true);
        spawnBomb(y,x);
        checkBomb();
      }
      const newBoard = [...arrayBoard];
      newBoard[y][x].clicked = true;

      if (newBoard[y][x].promixityBombs == 0 && !newBoard[y][x].bomb) {
        nearbyCells.forEach(([dx, dy]) => {
          const neighbourX = x + dx;
          const neighbourY = y + dy;
          if (
            neighbourX >= 0 &&
            neighbourX < board.nColumns &&
            neighbourY >= 0 &&
            neighbourY < board.nLines
          ) {
            newBoard[neighbourY][neighbourX].clicked = true;
          }
        });
      }
      setArrayBoard(newBoard);
      if (newBoard[y][x].bomb == true && !  boardRevealed) {
        setGameOver(true);
        //alert("Game Over");
        setDisplayValue('GAMEOVER!')
        setTimeout(() => {
          setDisplayValue(''); // Reset the display value to an empty string
        }, 5000);
      }
    }
  };
  useEffect(() => {
    gameWin();
  }, [arrayBoard]);
  const handleLevelChange = (event) => {
    //event=nivel
    setLevel(event);
    changeBoard(event);
    handleResetGame();
  };

  const spawnBomb = (xClicked,yClicked) => {
    let bombs = 0;
    const newBoard = [...arrayBoard];

    while (bombs < board.nBombs) {
      let flag=false
      const x = Math.floor(Math.random() * board.nLines); //gera posições aleatorias
      const y = Math.floor(Math.random() * board.nColumns);
      
      if ((x >= xClicked - 1 && x <= xClicked + 1) && (y >= yClicked - 1 && y <= yClicked + 1)) { //para não clicar numa bomba ao inicio e para o jogo abrir
        flag = true;}                                                                         //gera coordenadas novas se a bomba estiver nas celulas vizinhas
      if (!flag && !newBoard[x][y].bomb) {    
        newBoard[x][y].bomb = true;
        //console.log(x,y); // Marca a posição como uma bomba
        bombs++; // Adiciona a bomba à lista de bombas
      }
    }
    console.log("bombas geradas");
    console.log(newBoard);
    setArrayBoard(newBoard);
  };

  const checkBomb = () => {
    const newBoard = [...arrayBoard];
    for (let x = 0; x < board.nLines; x++) {
      for (let y = 0; y < board.nColumns; y++) {
        let bombCount = 0;

        if (!newBoard[x][y].bomb) {
          nearbyCells.forEach(([dx, dy]) => {
            const neighbourX = x + dx;
            const neighbourY = y + dy;

            if (
              neighbourX >= 0 &&
              neighbourX < board.nLines &&
              neighbourY >= 0 &&
              neighbourY < board.nColumns
            ) {
              if (arrayBoard[neighbourX][neighbourY].bomb) {
                bombCount++;
              }
            }
          });
        }
        //console.log(bombCount);
        newBoard[x][y] = {
          //copia e adiciona o proximity bombs
          ...newBoard[x][y],
          promixityBombs: bombCount,
        };
      }
    }
  };

   /*
  const [boardReeveal, setBoardReveal]=useState(false)
  const revelar=()=>{
    setBoardReveal(!boardReeveal)
    console.log(boardReeveal);
  }*/

  return (
    <div className="container">
    
        <div className="gif">
          <div id="mensagem">{displayValue}</div>
          <Header></Header>
          <ControlPanel
            onLevelChange={handleLevelChange}
            handleClick={handleResetGame}
            gameStarted={gameStarted}
            gameOver={gameOver}
            bombs={board.nBombs}
            flags={placedFlags}
            
            //revelar={revelar}            
          > 
          </ControlPanel>
          <GamePanel
            //boardReeveal={boardReeveal}
            
            board={board}
            arrayBoard={arrayBoard}
            level={level}
            handleClick={handleClick}
            placeFlag={placeFlag}
            gameOver={gameOver}
            
          ></GamePanel>
          <Footer></Footer>
        </div>
      
    </div>
    // <Cell></Cell>
  );
}

export default App;
