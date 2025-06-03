export default function media({nota1,nota2,nota3}){
    let media = (nota1+nota2+nota3)/3;

    return(
        <div>
            <p>
                A media é {media}.
            </p>
        </div>
    )
}