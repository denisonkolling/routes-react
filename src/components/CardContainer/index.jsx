import { CardContainerStyled } from "./styles"

const CardContainer = ({children}) => {
  return (
    <CardContainerStyled>{children}</CardContainerStyled>
  )
}

export default CardContainer