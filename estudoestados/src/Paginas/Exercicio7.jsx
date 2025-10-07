import { useState } from "react";

export default function Exercicio7() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularMedia() {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    const soma = n1 + n2 + n3;
    const media = soma / 3;

    setResultado(
      'A média aritmética do aluno é: ${media.toFixed(2)}'
    );
  }

  return (
    <div>
      <h1>Exercício 7 - Média Aritmética</h1>
      
      <div className="conteudo">
        <form>
          <p>
            Digite a nota 1:
            <br />
            <input
              type="text"
              value={nota1}
              onChange={(e) => setNota1(e.target.value)}
              placeholder="Nota 1"
            />
          </p>

          <p>
            Digite a nota 2:
            <br />
            <input
              type="text"
              value={nota2}
              onChange={(e) => setNota2(e.target.value)}
              placeholder="Nota 2"
            />
          </p>

          <p>
            Digite a nota 3:
            <br />
            <input
              type="text"
              value={nota3}
              onChange={(e) => setNota3(e.target.value)}
              placeholder="Nota 3"
            />
          </p>

          <p>
            <input
              type="button"
              value="Exercício 7"
              onClick={calcularMedia}
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