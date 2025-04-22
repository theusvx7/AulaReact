export default function Exercicio3 (valor,taxa,tempo)
{
    let valorparcela = valor + (valor *{taxa*taxa/100}* tempo);

     return(
        <div>
            O valor da parcela é {valorparcela}
        </div>
     )
}