import './App.css'
import BannerJogos from './components/bannerJogos/bannerJogos.jsx'
import Header from './components/header/header.jsx'
import Form from './components/form/form.jsx'

function App() {

  return (
    <>
      <Header/>
      <BannerJogos
        dia= "Sáb., 31/08"
        horario= "18:30" 
        timeCasa="Cuiabá"
        timeVisitante="Criciuma"
      />
      <BannerJogos
        dia= "Sáb., 31/08"
        horario= "18:30" 
        timeCasa="Botafogo"
        timeVisitante="Fortaleza"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "11:00" 
        timeCasa="Cruzeiro"
        timeVisitante="Atlético-Go"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Corinthians"
        timeVisitante="Flamengo"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Grêmio"
        timeVisitante="Atlético-Mg"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "16:00" 
        timeCasa="Athletico-Pr"
        timeVisitante="palmeiras"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Bragantino"
        timeVisitante="Bahia"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Fluminense"
        timeVisitante="São Paulo"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Juventude"
        timeVisitante="Internacional"
      />
      <BannerJogos
        dia= "Dom., 01/09"
        horario= "18:30" 
        timeCasa="Vitória"
        timeVisitante="Vasco da Gama"
      />
      <Form/>
    </>
  )
}

export default App;