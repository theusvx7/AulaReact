import { useState } from "react";

export default function Exercicio8() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC() {
    const valorPeso = parseFloat(peso);
    const valorAltura = parseFloat(altura);

   
    if (valorAltura <= 0) {
      setResultado("A altura deve ser um valor positivo.");
      return;
    }
    
    const imc = valorPeso / (valorAltura * valorAltura);

    setResultado(
      `Seu IMC é: ${imc.toFixed(2)}`
    );
  }

  return (
    <div>
      <h1>Exercício 8 - Cálculo de IMC</h1>
      
      <div className="conteudo">
        <form>
          <p>
            Digite o peso (em kg):
            <br />
            <input
              type="text"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
            />
          </p>

          <p>
            Digite a altura (em metros):
            <br />
            <input
              type="text"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 1.75"
            />
          </p>

          <p>
            <input
              type="button"
              value="Exercício 8"
              onClick={calcularIMC}
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