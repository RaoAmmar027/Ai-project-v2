import React from 'react'
import styled from 'styled-components'
import "../style.css"
import { Col, Container, Row } from 'styled-bootstrap-grid'
const InputField = () => {
  return (
    <>
       <Container>
        <Row justifyContent='center'>
          <Col lg={8} md={8} sm={10}>
         <TextArea
          placeholder='Write the text you want to convert....' />
          </Col>
        </Row>
       </Container>

    </>   
  )
}
const TextArea = styled.textarea`
width:100%;
height:200px;
background:#403d84;
padding:1rem;
color:white;
border:0;
outline:0;

border-radius:10px;
&::placeholder {
    color: white; /* Set your desired color here */
  }
`
export default InputField