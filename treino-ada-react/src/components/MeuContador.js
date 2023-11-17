import {useState} from 'react'

export default function MeuContador(){

    const [contador, setContador] = useState(0)


    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }

    if(contador > 5){
        return(
        <div>
            <h1>Valor muito alto!</h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
        )
    } 


        return(
        <div>
            <h1>Meu Contador:</h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
        )
    }

   /* return (
        <div>
            <h1>Meu Contador: {contador}</h1>
            { contador > 9 ? <h1>Valor muito grande</h1> : null}
            <button onClick={aumentar}>aumentar</button>
        </div>
    )*/
  


  // hooks - variáveis de estado (faz o componente ser renderizado para mudança de estado de uma const)
  // estados alteram valores de um componente e faz a página/aplicação ser dinâmica