import { useState } from "react";
export default function Exemplo2() {
  const[numero1, setNumero1] = useState();
  const[numero2, setNumero2] = useState();
  const[aluno, setAluno] = useState();
  const[resultado, setResultado] =useState();

  function somar()
  {
    let n1, n2, soma;
    n1 = Number(numero1);
    n2 = Number(numero2);
    soma = (n1 + n2) / 2;

  setResultado ("A média do aluno "+aluno+" notas é " +soma);

  }

  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="conteudo">
        <h3>O objetivo será receber o nome do aluno, suas 3 notas e calcular a média.</h3>
        <form>
          <p>Nome do Aluno:<br  />
          <input type="text" value={aluno} onChange={ (e) => setAluno(e.target.value)}/> 
          </p>
          <p>Nota 1<br  />
          <input type="text" value={numero1} onChange={ (e) => setNumero1(e.target.value)}/>
          </p>
          <p>Nota 2<br  />
          <input type="text" value={numero2} onChange={ (e) => setNumero2(e.target.value)} />
          </p>
          <p>
            <input type="button" value="Calcular" onClick={somar}/>
          </p>

          <p>
            Aluno = {aluno} <br />
            Número1 = {numero1} <br />
            Número2 = {numero2} <br />
            {resultado}
          </p>

          <a href="/">Voltar</a>
         
        </form>
      </div>


      
    </div>
  );
}
