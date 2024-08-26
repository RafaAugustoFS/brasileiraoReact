import "./header.css";
import imagemBr from "../../assets/brasileiraoImg.png"
import imagemCbf from "../../assets/cbfImg.png"

const Header = () =>{
    return(
        <header className="headerStyle">
            <div>
                <img className="imagemBr" src={imagemCbf} alt="" />
            </div>
            <div>
                <h1 className="titleStyle">Campeonato Brasileiro</h1>
                <h4 className="subtitleStyle">25ª Rodada</h4>
            </div>
            <div>
                <img className="imagemBr"src={imagemBr} alt="" />
            </div>
            
        </header>
    )
}

export default Header;