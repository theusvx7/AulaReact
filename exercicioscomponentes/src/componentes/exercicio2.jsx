export default function Exercicio2 ({peso,altura})
{
 let imc = peso /(altura*altura);

 return(
    <div> 
        a pessoa com {peso}kg e {altura}metros, e tem IMC de {imc}
    </div>
 )
}