import { useState } from "react";

export default function Exercicio2() {
  const [temperaturaFahrenheit, setTemperaturaFahrenheit] = useState("");
  const [temperaturaCelsius, setTemperaturaCelsius] = useState("");

  function calcularCelsius() {
    const fah = parseFloat(temperaturaFahrenheit);
    const celsius = ((fah - 32) * 5) / 9;

    setTemperaturaCelsius(
      `A temperatura de ${fah}°F corresponde a ${celsius.toFixed(2)}°C.`
    );
  }


  return (
    <div>
      <h1>Exercício 2 - Conversor de Temperatura</h1>

      <div className="conteudo">
        <h3>Conversão de Fahrenheit para Celsius</h3>
       

        <form>
          <p>
            Digite a temperatura em graus Fahrenheit:
            <br />
            <input
              type="text"
              value={temperaturaFahrenheit}
              onChange={(e) => setTemperaturaFahrenheit(e.target.value)}
              placeholder="Ex: 77"
            />
          </p>

          <p>
            <input
              type="button"
              value="Calcular Celsius"
              onClick={calcularCelsius}
            />
          </p>

          <p>
            {temperaturaFahrenheit.trim() !== "" && (
                <>
                    Fahrenheit digitado: <strong>{temperaturaFahrenheit}°F</strong> 
                    <br />
                </>
            )}
            <br />
            {temperaturaCelsius}
          </p>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}