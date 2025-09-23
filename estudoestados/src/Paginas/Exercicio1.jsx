import { useState } from "react";
export default function Exercicio1()
{
  const[quadrado,setQuadrado] = useState ();
  const [cubo,setCubo] = useState ();
  const[resultado, setResultado] =useState();
    return(
        <div>
            <h1>Exercício 1</h1>
        <div className="conteudo">
            
            <form>
          <p>digite um número qualquer:<br  />
          <input type="text"/>
          </p>
         
          <p>
            <input type="button" value="Calcular"/>
          </p>
         
        </form>
        </div>
        </div>
    )
}