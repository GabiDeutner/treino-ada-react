import {useState} from 'react'

export default function MeuContador(){

    const [contador, setContador] = useState(0)


    function aumentar(){
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>aumentar</button>
        </div>
    )
  }


  // hooks - variáveis de estado (faz o componente ser renderizado para mudança de estado de uma const)
  // estados alteram valores de um componente e faz a página/aplicação ser dinâmica