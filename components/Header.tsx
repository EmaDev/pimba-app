import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    padding: 2rem;
    background-color: #26282D;
    border-radius: 0 0 30% 30%;
    height: 100px;
    position:relative;
    margin-bottom: 3rem;
`;

const Img = styled.div`
   height: 105px;
   width: 150px;
   position:absolute;
   left: 0; right: 0;
   margin:auto;
   background-color:#26282D;
   border-radius: 100%;
   padding: 1rem;
   display:flex;
   justify-content: center;
   img{
    height: 100%;
   }
`;

export const Header = () => {
  return (
    <Container>
      <Img>
        <Image src={require('../assets/logo.png')} />
      </Img>
    </Container>
  )
}
