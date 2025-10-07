import { useState } from "react";

export default function Exercicio10() {
  const [valorHora, setValorHora] = useState("");
  const [qtdHoras, setQtdHoras] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularSalario() {
    const vh = parseFloat(valorHora);
    const qh = parseFloat(qtdHoras);
    const diasMes = 30;
    
    const salario = vh * qh * diasMes;

    setResultado(
      `O salário ao final do mês é: R$ ${salario.toFixed(2)}`
    );
  }

  return (
    <div>
      <h1>Exercício 10 - Cálculo de Salário Mensal</h1>
      
      <div className="conteudo">
        <form>
          <p>
            Digite o valor da hora:
            <br />
            <input
              type="text"
              value={valorHora}
              onChange={(e) => setValorHora(e.target.value)}
              placeholder="R$"
            />
          </p>

          <p>
            Digite a quantidade de horas trabalhadas por dia:
            <br />
            <input
              type="text"
              value={qtdHoras}
              onChange={(e) => setQtdHoras(e.target.value)}
              placeholder="Horas/dia"
            />
          </p>

          <p>
            <input
              type="button"
              value="Exercício 10"
              onClick={calcularSalario}
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