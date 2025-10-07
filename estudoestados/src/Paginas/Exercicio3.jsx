import { useState } from "react";

export default function Exercicio3() {
  const [prestacao, setPrestacao] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [tempoAtraso, setTempoAtraso] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularPrestacao() {
    const valorPrestacao = parseFloat(prestacao);
    const taxa = parseFloat(taxaJuros);
    const tempo = parseFloat(tempoAtraso);
    const taxaDecimal = taxa / 100;
    
    const valorAtraso = valorPrestacao * taxaDecimal * tempo;
    const valorTotal = valorPrestacao + valorAtraso;

    setResultado(
      `O valor da prestação em atraso é R$ ${valorTotal.toFixed(2)}.`
    );
  }

  return (
    <div>
      <h1>Exercício 3 - Prestação em Atraso</h1>
      
      <div className="conteudo">
        <form>
          <p>
            digite o valor da prestação:
            <br />
            <input
              type="text"
              value={prestacao}
              onChange={(e) => setPrestacao(e.target.value)}
              placeholder="R$"
            />
          </p>

          <p>
            digite a taxa de juros (ex: 5 para 5%):
            <br />
            <input
              type="text"
              value={taxaJuros}
              onChange={(e) => setTaxaJuros(e.target.value)}
              placeholder="%"
            />
          </p>

          <p>
            digite o tempo (em dias) de atraso:
            <br />
            <input
              type="text"
              value={tempoAtraso}
              onChange={(e) => setTempoAtraso(e.target.value)}
              placeholder="Dias"
            />
          </p>

          <p>
            <input
              type="button"
              value="Calcular"
              onClick={calcularPrestacao}
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