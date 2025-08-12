import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import Minasgerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGandedoSul from "./Paginas/R.G doSul";
import Parana from "./Paginas/Parana";
export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />} />;
                <Route path="/sp" element={ <SaoPaulo />}/>
                <Route path="/mg" element={ <Minasgerais />}/>
                <Route path="/es" element={ <EspiritoSanto />}/>
                <Route path="/rj" element={ <RiodeJaneiro />}/>
                <Route path="/sc" element={ <SantaCatarina />}/>
                <Route path="/rg" element={ <RioGandedoSul />}/>
                <Route path="/pr" element={ <Parana />}/>
            </Routes>
        </BrowserRouter>
    );
}