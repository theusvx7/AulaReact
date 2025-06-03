export default function Exemplo1 ({n1,n2}){
    let soma = Number(n1) + Number(n2);

    return(
        <div>
            <p>
                A soma de {n1} + {n2} é {soma}
            </p>
        </div>
    );
}