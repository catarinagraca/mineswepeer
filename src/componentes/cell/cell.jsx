import React ,{ useState }from "react";
import './cell.css';

export default function Cell({pos}){
    
    const [clicado, setClicado] = useState(false);
    
    // Função para lidar com o clique no quadrado
    const handleClick = () => {
        // Altera o estado para indicar que o quadrado foi clicado
        setClicado(true);
    };
    //const estiloQuadrado = clicado ? 'quadrado red' : 'quadrado'
    let estiloQuadrado=''
    if (pos%2 ===0){
        estiloQuadrado='odd'
    }
    else{
        estiloQuadrado='even'

    }

    return(
        <button className={estiloQuadrado} onClick={handleClick}></button>
    )
}