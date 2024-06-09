import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react"

export function Home() {

  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote, setFeedbackNote] = useState(0)

  function handlefeedbackButtonClick(event){
    const feedback = Number(event.target.innerText)

    setFeedbackNote(feedback)
  }

  function handleSubmit(){
    if (feedbackNote === 0) return

    setMostrarResultado(true)
  }

  return (
    mostrarResultado === false ? (
      <CardContainer>
      <IconContainer>
        <img src= {iconStarImg} alt="" />
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p> 

      <ButtonContainer>
        <button onClick={handlefeedbackButtonClick}>1</button>
        <button onClick={handlefeedbackButtonClick}>2</button>
        <button onClick={handlefeedbackButtonClick}>3</button>
        <button onClick={handlefeedbackButtonClick}>4</button>
        <button onClick={handlefeedbackButtonClick}>5</button>
      </ButtonContainer>

      <button onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ): (
      <CardContainer>
        <img src={thankYouImg} alt="" />

        <ResultContainer>
          <p>Você selecionou {feedbackNote} de 5</p>
        </ResultContainer>

        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
    )
  )
}
