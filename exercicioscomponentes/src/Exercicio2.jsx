export default function Exercicio2 ({temp}){
    let fah = (temp - 32)*5/9;

    return(
        <div>
            <p>
                A temperatura {temp} em Farenhit é {fah}
            </p>
        </div>
    );
}