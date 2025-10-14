import { useState } from "react";

export default function Exercicio9() {
  const [principal, setPrincipal] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularMontante() {
    const p = parseFloat(principal);
    const i = parseFloat(taxaJuros);
    const t = parseFloat(tempo);
    
    const taxaDecimal = i / 100;

    const montante = p * (1 + (taxaDecimal * t));

    setResultado(
      `O Montante de Juros Simples é: R$ ${montante.toFixed(2)}`
    );
  }

  return (
    <div>
      <h1>Exercício 12 - Juros Simples</h1>
      
      <div className="conteudo">
        <form>
          <p>
            Digite o principal (valor inicial):
            <br />
            <input
              type="text"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="R$"
            />
          </p>

          <p>
            Digite a taxa de juros (em porcentagem):
            <br />
            <input
              type="text"
              value={taxaJuros}
              onChange={(e) => setTaxaJuros(e.target.value)}
              placeholder="%"
            />
          </p>

          <p>
            Digite o tempo (em anos):
            <br />
            <input
              type="text"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              placeholder="Anos"
            />
          </p>

          <p>
            <input
              type="button"
              value="Exercício 9"
              onClick={calcularMontante}
            />
          </p>

          <p>
             {resultado}
          </p>
          
          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}