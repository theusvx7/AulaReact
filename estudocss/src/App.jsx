import "./app.css";
export default function App()
{
    const  centralizado ={textAlign : "center"};

    const destaque = {
        textAlign: "center",
        border: "2px solid blue",
        padding: "10px"
    }
    return (
        <div>
            <h1>Estudo CSS</h1>
            
            <p>
O CSS (<i> Cacasding Style Sheets</i>) é uma linguagem utilizada para estizar <b>paginas web </b>, e será utilizada dentro ou fora do HTML.

            </p>

            <p>
                Na aula de hoje, vamos estudar e entender como aplicar rdtilos CSS em componentes de React
            </p>

            <p> 
            <ul>
                <li> Definir cor para o texto, para o fundo do elemento.     </li>
                <li> Posicionamento dos elementos na página. </li>
                <li> Espaçamento, borda, sombras, etc...</li>
                <li> Efeitos visuais e animações. </li>
            </ul>
            </p>

            <p>
                o HTML diz oque deve aparecer na página, enquanto o CSS diz como deve aparecer.
            </p>
            <p className="centro">
                Neymar da Silva Santos Junior 
            </p>

            <p style={centralizado}>
                <img src="neymar.jpg" alt=""/>
            </p>

            <h3 style={destaque}> FIM DA AULA!! </h3>

        </div>
    );
}