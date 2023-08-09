import {Container} from './styled'

export const Button = ({children, type , signing, width, height}) => {
  return  <Container onClick={signing} type={type} width={width} height={height}>
    {children || "Generic Button"} 
  </Container>
  
}

export default Button