export default function Exercicio6 ({quantidade, preco}){
    let subtotal = quantidade * preco;
    let desc = subtotal * (10/100);
    let vtotal = subtotal - desc;

    return (
<div>
    <p>
        O valor dos produtos é {vtotal}.
    </p>
</div>
    );
}