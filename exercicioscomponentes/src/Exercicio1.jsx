export default function Exemplo1 ({n1}){
    let quadrado = Number(n1) * Number(n1);
    let cubo = Number(n1) * Number(n1) * Number(n1);

    return(
        <div>
            <p>
                O quadrado do numero é {quadrado}
                <br />O cubo do numero é {cubo}
            </p>
        </div>
    );
}