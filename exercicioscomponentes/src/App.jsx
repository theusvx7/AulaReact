import Exemplo1  from "./componentes/exemplo1"
export default function App(){

  return(
    <div>
      <h1> Exercicios de Componente</h1>

      <h3> Chamada para o Exemplo 1 </h3>
      <Exemplo1 numero1={8} numero2={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={5.8} />
      <Exemplo1 numero1={-58} numero2={65} />

    </div>
  )
}