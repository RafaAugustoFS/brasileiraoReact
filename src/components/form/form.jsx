import { useState } from "react";
import "./form.css"

const Form = () => {
  //Estado inicial do formulário
  const initialForm = {
    nome: "",
    time: "",
  };

  //Estado do formulário
  const [formState, setFormState] = useState(initialForm);
  const timesBrasil = ["Athletico-Pr","Atlético-Mg","Atlético-Go","Bahia", "Botafogo", "Bragantino", "Corinthians", "Criciuma", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Palmeiras", "São Paulo", "Vasco da Gama", "Vitória"]

  // Função para lidar com a alteração dos campos de entrada

  const handleInput = (event) => {
    //Obter valor e o nome do campo de entrada
    const target = event.currentTarget;
    //Extrair valor e o nome do campo de entrada
    const { value, name } = target;

    //atualizar o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    if(formState.nome === "" || formState.time === " "){
      alert("Preencha todos os campos!")
      return;
    }
    if(!timesBrasil.includes(formState.time)){
      alert("Escreva o time conforme a tabela acima!")
      setFormState({ ...initialForm });
      return;
    }
    console.log(formState.nome + " torce para o " + formState.time + "!");
    // Após o submit retorna o valor nulo no input
    setFormState({ ...initialForm });
  };
  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        <div className="containerLabels">
        <div className="form-control">
          <label htmlFor="nome">Digite seu nome: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formState.nome}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Digite seu time de coração: </label>
          <input
            type="text"
            id="time"
            name="time"
            value={formState.time}
            onChange={handleInput}
          />
        </div>
        </div>
        <div className="form-control">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
