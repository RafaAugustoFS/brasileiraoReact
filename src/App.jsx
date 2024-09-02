import './App.css'
import BannerJogos from './components/bannerJogos/bannerJogos.jsx'
import Header from './components/header/header.jsx'
import Form from './components/form/form.jsx'
import Criciuma from './assets/criciuma.png'
import Cuiaba from './assets/cuiaba.png'
import Botafogo from './assets/botafogo.png'
import Fortaleza from './assets/fortaleza.png'
import Cruzeiro from './assets/cruzeiro.png'
import AtleticoGo from './assets/atleticoGo.png'
import Corinthians from './assets/corinthians.png'
import Flamengo from './assets/flamengo.png'
import Gremio from './assets/gremio.png'
import Atletico from './assets/atletico.png'
import Athletico from './assets/athletico.png'
import palmeiras from './assets/palmeiras.png'
import Bragantino from './assets/bragantino.png'
import Bahia from './assets/bahia.png'
import SaoPaulo from './assets/saoPaulo.png'
import Fluminense from './assets/fluminense.png'
import Juventude from './assets/juventude.png'
import Internacional from './assets/internacional.png'
import Vasco from './assets/vasco.png'
import Vitoria from './assets/vitoria.png'

function App() {

  return (
    <>
      <Header/>
      <BannerJogos
        imgCasa={Cuiaba}
        dia= "Sáb., 31/08"
        horario= "18:30" 
        timeCasa="Cuiabá"
        timeVisitante="Criciuma"
        imgVisitante= {Criciuma}
      />
      <BannerJogos
        imgCasa={Botafogo}
        dia= "Sáb., 31/08"
        horario= "18:30" 
        timeCasa="Botafogo"
        timeVisitante="Fortaleza"
        imgVisitante={Fortaleza}
      />
      <BannerJogos
      imgCasa={Cruzeiro}
        dia= "Dom., 01/09"
        horario= "11:00" 
        timeCasa="Cruzeiro"
        timeVisitante="Atlético-Go"
        imgVisitante={AtleticoGo}
      />
      <BannerJogos
        imgCasa={Corinthians}
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Corinthians"
        timeVisitante="Flamengo"
        imgVisitante={Flamengo}
      />
      <BannerJogos
        imgCasa={Gremio}
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Grêmio"
        timeVisitante="Atlético-Mg"
        imgVisitante={Atletico}
      />
      <BannerJogos
        imgCasa={Athletico}
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Athletico-Pr"
        timeVisitante="Palmeiras"
        imgVisitante={palmeiras}
      />
      <BannerJogos
        imgCasa={Bragantino}
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Bragantino"
        timeVisitante="Bahia"
        imgVisitante={Bahia}
      />
      <BannerJogos
        imgCasa={Fluminense}
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Fluminense"
        timeVisitante="São Paulo"
        imgVisitante={SaoPaulo}
      />
      <BannerJogos
        imgCasa={Juventude}
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Juventude"
        timeVisitante="Internacional"
        imgVisitante={Internacional}
      />
      <BannerJogos
        imgCasa={Vitoria}
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Vitória"
        timeVisitante="Vasco da Gama"
        imgVisitante={Vasco}
      />
      <Form/>
    </>
  )
}

export default App;