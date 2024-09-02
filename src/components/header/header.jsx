import "./header.css";
import imagemBr from "../../assets/brasileiraoImg.png"
import imagemCbf from "../../assets/logo-borda.png"

const Header = () =>{
    return(
        <header className="headerStyle">
            <div>
                <img className="imagemCbf" src={imagemCbf} alt="" />
            </div>
            <div className="containerInfos">
                <h1 className="titleStyle">Campeonato Brasileirão Betano de Futebol</h1>
                <h4 className="subtitleStyle">25ª Rodada</h4>
            </div>
            <div>
                <img className="imagemBr"src={imagemBr} alt="" />
            </div>
        </header>
    )
}

export default Header;