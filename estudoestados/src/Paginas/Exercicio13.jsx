import { useState } from "react";

export default function Exercicio13() {
    const[n1, setn1] = useState(0);
    const[n2, setn2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function tempoviagem(){
       let dist, vel, tempo;
       dist = Number(n1);
       vel = Number(n2);

       tempo = dist/vel;

        setResultado( "o tempo estimado de viagem com base na distância e na velocidade média é " + tempoviagem);
    }
    return (
        <div>
          <h1>Exercício 13</h1>
    
          <div className="conteudo">
           
            <form>
              <p>digite o primeiro número<br  />
              <input type="text" onChange={ (e) => setn1(e.target.value)}/>
              </p>
              <p>digite o segundo número<br  />
              <input type="text" onChange={ (e) => setn2(e.target.value)}/>
              </p>
              <p>
                <input type="button" value="Calcular" onClick={tempoviagem}/>
              </p>
    
              <p>
                Distância = {d} <br />
                Velocidade = {v} <br />
                {tempoviagem}
              </p>
    
              <a href="/">Voltar</a>
             
            </form>
          </div>
        </div>
    );
}