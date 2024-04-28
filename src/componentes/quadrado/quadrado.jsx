import React ,{ useState }from "react";
import './quadrado.css';

export default function Quadrado(){

    const [clicado, setClicado] = useState(false);

    // Função para lidar com o clique no quadrado
    const handleClick = () => {
        // Altera o estado para indicar que o quadrado foi clicado
        setClicado(true);
    };
    const estiloQuadrado = clicado ? 'quadrado red' : 'quadrado'

    return(
        <button className={estiloQuadrado} onClick={handleClick}></button>
    )
}