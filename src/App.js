import './App.css';
import Tabuleiro from './componentes/tabuleiro/tabuleiro';
import PainelControlo from './componentes/painel controlo/painelControlo';

function App() {
    return(
        <div>
            <PainelControlo></PainelControlo>
            <Tabuleiro></Tabuleiro>   
        </div>
        
    )
}

export default App;
