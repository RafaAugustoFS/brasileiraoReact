import "./bannerJogos.css"

const BannerJogos = ({timeCasa, timeVisitante, dia, horario}) =>{
    return(
         <div className="banner">
            <la>
                <li className="match">
                    <div>
                        <h4>{timeCasa} x <br /> {timeVisitante}</h4>
                    </div>
                    <div className="datetime">
                        {dia} <br />
                        {horario}
                    </div>
                </li>
            </la>
        </div>

        
    )
}
export default BannerJogos;