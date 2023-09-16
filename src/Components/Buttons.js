import React, { useState } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Buttons = () => {


  return (
    <>
    <Container>
      <Row justifyContent='center'>
         <Col lg={2} md={6} sm={4} xs={6}>
         <PlayButton>
            Play
       </PlayButton>
         </Col>
         <Col lg={2} md={6} sm={4} xs={6}>
         <DownloadButton>
             Download
           </DownloadButton>
         </Col>
      </Row>
    </Container>
       
      
    </>
  );
};


const PlayButton = styled.div`
background-color:#ff2963;
height:3rem;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:20px;
font-weight:500;
border-radius:50px;
`
const DownloadButton = styled.div`
background-color:#ff2963;
height:3rem;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:20px;
font-weight:500;
border-radius:50px;
`
export default Buttons;
