import React from "react";
import Rules from "../popup rules/rules";
import { useState } from "react";

function Header() {


  const[popUp,setPopUp]=useState(false)
  const handlePopUp = () => {
    setPopUp(true)
  };

  
    return (
      <header>
        
        <h2 className="title">Mineswepeer em React</h2>
        <img src="imagens/questionMark.png" width={20} height={20} alt="relogio" onClick={handlePopUp}/>
        <Rules trigger={popUp} setTrigger={setPopUp}>
          <h3>Regras</h3>
          <p> estados e cliques.....</p>
          
        </Rules>
        {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#feac56" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,154.7C320,149,400,171,480,186.7C560,203,640,213,720,192C800,171,880,117,960,106.7C1040,96,1120,128,1200,138.7C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
      </header>
    );
  }
  
  export default Header;
  