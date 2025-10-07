import { useState } from "react";

export default function Exercicio1() {
  const [numero, setNumero] = useState(""); 
  
  const [resultado, setResultado] = useState("");

  function calcularPotencias() {
    const n = Number(numero);

    const quadrado = n * n;
    const cubo = n * n * n;

    setResultado(
      `O número digitado é ${n}. Seu Quadrado é ${quadrado} e seu Cubo é ${cubo}.`
    );
  }



  return (
    <div>
      <h1>Exercício 1</h1>

      <div className="conteudo">
        <h3>Exemplo do useState</h3>
        <p>
          O objetivo aqui é receber um número, calcular seu quadrado e seu cubo, e exibir os resultados.
        </p>
        <form>
          <p>
            Digite um número qualquer:
            <br />
            <input 
              type="text" 
              value={numero} 
              onChange={(e) => setNumero(e.target.value)} 
            />
          </p>

          <p>
            <input 
              type="button" 
              value="Calcular" 
              onClick={calcularPotencias} 
            />
            
          </p>

          <p>
            Número: {numero} 
            <br />
            <br />
           {resultado}
          </p>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}