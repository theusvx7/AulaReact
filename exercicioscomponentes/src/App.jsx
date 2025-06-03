import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
export default function App(){


  return (
    <div>
      <h1>Exemplo 1 </h1>
      <Exemplo1 n1={10} n2={20}/>
      <Exemplo1 n1={15} n2={2.2}/>
      <hr />

      <h1> Exercicio 1</h1>
      <Exercicio1 n1={10}/>
      <Exercicio1 n1={5}/>
      <hr />

      <h1> Exercicio 2 </h1>
      <Exercicio2 temp = {32}/>
      <hr />

      <h1> Exercicio 3</h1>
      <Exercicio3 valor={20} taxa={10} tempo={21}/>
      <hr />

      <h1> Exercicio 4</h1>
      <Exercicio4 base={10} altura={10} />
      <hr />

  <h1> Exercicio 6</h1>
      <Exercicio6 quantidade={2} preco={10} />
      <hr />

      <h1> Exercicio 7</h1>
      <Exercicio7 nota1={6} nota2={7} nota3={10} />
      <hr />

    </div>
  )
}