import React from 'react'
import { Container } from './styled'
import {Input, Button }from "../Generic"



export const Home = () => {
  return <Container>
     <h1>Home</h1>
     <Input placeholder={"Enter"} width={200}/>
     <Button>Test</Button>
    </Container>
  
}


export default Home