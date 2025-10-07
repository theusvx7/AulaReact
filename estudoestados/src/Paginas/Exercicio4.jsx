import { useState } from "react";

export default function Exercicio4() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularArea() {
    const valorBase = parseFloat(base);
    const valorAltura = parseFloat(altura);
    const area = valorBase * valorAltura;

    setResultado(
      `A área calculada é de ${area.toFixed(2)} unidades quadradas.`
    );
  }

  return (
    <div>
      <h1>Exercício 4 - Cálculo de Área</h1>
      
      <div className="conteudo">
        <form>
          <p>
            digite o valor da base:
            <br />
            <input
              type="text"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="Base"
            />
          </p>

          <p>
            digite a taxa da altura:
            <br />
            <input
              type="text"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Altura"
            />
          </p>

          <p>
            <input
              type="button"
              value="Calcular"
              onClick={calcularArea}
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