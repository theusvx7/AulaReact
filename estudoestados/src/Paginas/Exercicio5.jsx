import { useState } from "react";

export default function Exercicio5() {
  const [lado, setLado] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularAreaQuadrado() {
    const valorLado = parseFloat(lado);
    const area = valorLado * valorLado;

    setResultado(
      `A área do quadrado é de ${area.toFixed(2)} unidades quadradas.`
    );
  }

  return (
    <div>
      <h1>Exercício 5 - Área do Quadrado</h1>
      
      <div className="conteudo">
        <form>
          <p>
            digite o valor do lado:
            <br />
            <input
              type="text"
              value={lado}
              onChange={(e) => setLado(e.target.value)}
              placeholder="Lado"
            />
          </p>

          <p>
            <input
              type="button"
              value="Calcular"
              onClick={calcularAreaQuadrado}
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