import { ContainerStyled } from "./styles"

const Container = ({children, ...props}) => {
  return (
    <ContainerStyled {...props}>{children}</ContainerStyled>
  )
}

export default Container