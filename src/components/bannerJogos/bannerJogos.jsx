import "./bannerJogos.css"

const BannerJogos = ({timeCasa, timeVisitante, imgCasa, dia, imgVisitante, horario}) =>{
    return(
         <div className="banner">
            <la>
                <li className="match">
                    <img className="imgTimes" src={imgCasa} alt="" />
                    <div>
                        <div className="datetime">
                            {dia} {horario}
                        </div>
                        <div>
                            <h4>{timeCasa} x {timeVisitante}</h4>
                        </div>
                    </div>
                    <img className="imgTimes" src={imgVisitante} alt="" />
                </li>
            </la>
        </div>

        
    )
}
export default BannerJogos;