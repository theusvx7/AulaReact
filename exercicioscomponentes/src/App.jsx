import Exemplo1  from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercico3"

export default function App(){

  return(
    <div>
      <h1> Exercicios de Componente</h1>

      <h3> Chamada para o Exemplo 1 </h3>
      <Exemplo1 numero1={8} numero2={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={5.8} />
      <Exemplo1 numero1={-58} numero2={65} />
<hr />
      <h3> Chamada para o Exercicio 1 </h3>
    <Exercicio1 fah={100} />
    <Exercicio1 fah={50} />
    <Exercicio1 fah={32} />

    <hr />

    <h3>Chamada para o exercicio 2 </h3>
    <Exercicio2 peso={80} altura = {1.80} />
    <Exercicio2 peso={60} altura = {1.60} />
<hr />

<h3>  Chamada para o exercicio 3</h3>
<Exercicio3 valor={100} taxa={10} tempo={24} />

    </div> 
  )
}