export default function Exercicio3({valor,taxa,tempo}){
    let vparcela = valor + (valor*((taxa*taxa)/100)*tempo);

    return(
        <div>
            <p>
                O valor da taxa é {vparcela}
            </p>
        </div>
    )
}