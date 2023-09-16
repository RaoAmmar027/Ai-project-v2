import React from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'
const LoginSignup = () => {
  return (
    <> 
       <Page>
                 <Container>
                             <Row justifyContent='center'>   
                               <Col lg={5}>
                                 <Card>

                                 </Card>
                             </Col>                             
                             </Row>
                  </Container>
       </Page>
    </>
  )
}

const Card = styled.div`
height:500px;
border:2px solid #ff2963;
`

const SignUpBtn = styled.div`
  width: 100%;
  color: #ff2963;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 50px;
  transition: transform 0.2s ease-in-out; /* Add a transition for the transform property */

  &:hover {
    color: white;
    background: #ff2963;
    transform: scale(1.05); /* Scale the button up slightly on hover */
  }
`;

const LogInBtn = styled.div`
  color: white;
  background: #ff2963;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 50px;
  transition: transform 0.2s ease-in-out; /* Add a transition for the transform property */

  &:hover {
    transform: scale(1.05); /* Scale the button up slightly on hover */
  }
`;


const Page = styled.div`
background:#403d84;
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export default LoginSignup


{/* <Col lg={1}>
                                   <LogInBtn>
                                            Log In
                                   </LogInBtn>
                                </Col>
                                <Col lg={1}>
                                   <SignUpBtn>
                                   Sign Up
                                   </SignUpBtn>
                                </Col> */}