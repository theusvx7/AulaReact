import { useState } from "react";

export default function Exercicio6() {
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularVenda() {
    const valorQuantidade = parseFloat(quantidade);
    const valorPreco = parseFloat(preco);
    const taxaDesconto = 0.10;
    
    const subtotal = valorQuantidade * valorPreco;
    
    const desconto = subtotal * taxaDesconto;
    
    const valorFinal = subtotal - desconto;

    setResultado(
      <>
        Subtotal: R$ {subtotal.toFixed(2)}
        <br />
        Desconto (10%): R$ {desconto.toFixed(2)}
        <br />
        <strong>Valor Final a Pagar: R$ {valorFinal.toFixed(2)}</strong>
      </>
    );
  }

  return (
    <div>
      <h1>Exercício 6 - Cálculo de Venda com Desconto</h1>
      
      <div className="conteudo">
        <form>
          <p>
            Digite a quantidade:
            <br />
            <input
              type="text"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              placeholder="Ex: 5"
            />
          </p>

          <p>
            Digite o preço:
            <br />
            <input
              type="text"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              placeholder="R$"
            />
          </p>

          <p>
            <input
              type="button"
              value="Exercício 6"
              onClick={calcularVenda}
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