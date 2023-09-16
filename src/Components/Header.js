import React from 'react'
import styled from 'styled-components'
import InputField from './InputField'
import Buttons from './Buttons'
import Selection from './Selection'


const Header = () => {
  return (
    <>
      
     <MainDiv>
        
      <Heading>
                 Text To Speech <Span>Convertor</Span>
      </Heading>
      <InputField/>
      <Selection/>
      <Buttons/>
     </MainDiv>
    
    </>
  )
}

const MainDiv =  styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2rem;
`
const Heading = styled.div`
color:white;
font-size:50px;
font-weight:500;
font:Gilroy;
text-align:center;
`

const Span = styled.span`
color:#ff2963;
font-size:50px;
font-weight:500;
font:Gilroy;
text-align:center;
`
export default Header