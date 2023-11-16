import MeuComponente from './components/MeuComponente';
import MeuContador from './components/MeuContador'; 

function App() {
  return (
    <div>
    <h1>Hello World, React!</h1>
    
    <MeuComponente />
    <MeuBotao conteudo='me clique' />
    <MeuBotao conteudo='depois aqui' />
    <MeuBotao conteudo='e por fim aqui' />
    <MeuContador/>

    </div>
  );
}

function MeuBotao(props){
  return(
    <button> {props.conteudo} </button>
  )
}



export default App;

// props e componentes