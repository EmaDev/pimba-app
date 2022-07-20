import React from 'react';
import styled from 'styled-components';
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';

const Container = styled.footer`
   margin: 2rem auto;
   padding: 3rem 1rem;
   padding-bottom: 5rem;
   background-color: #26282d;
`;
const Buttons = styled.div`
    max-width: 100px;
    margin: 1rem auto;
    font-size: 3rem;
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Text = styled.p<any>`
   text-align:center;
   color: grey;
   font-size: ${({copy})=> copy ? '1.5rem': '2rem'};
   font-weight: 500;
   margin: 0;
   margin-bottom: .5rem;
`;
export const Footer = () => {
  return (
    <Container>
        <Buttons>
            <BsInstagram/>
            <BsWhatsapp/>
        </Buttons>
        <Text>Pimba Distribuidora</Text>
        <Text copy>Todos los derechos reservados 2022 ©</Text>
    </Container>
  )
}
