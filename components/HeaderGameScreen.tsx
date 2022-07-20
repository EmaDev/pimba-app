import React, { FC } from 'react';
import styled from 'styled-components';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import {IoIosArrowBack} from 'react-icons/io';


const Container = styled.header`
  width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
  background-color: pink;
  background-image: url(/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 20px 20px;

  @media(min-width: 678px){
    padding-bottom: 6rem;
  }
`;

const ButtonsContainer = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 3rem;
`;
const Title = styled.h2`
   text-align: center;
   font-size: 4rem;
   font-weight: 700;
   color: #fff;
   margin:0;
`;

interface Props {
    title: string;
    openModal?: () => void;
}
export const HeaderGameScreen:FC<Props> = ({title, openModal}) => {
  return (
    <Container>
        <ButtonsContainer>
            <IoIosArrowBack/>
            <BsFillInfoCircleFill onClick={openModal}/>
        </ButtonsContainer>
        <Title>{title}</Title>
    </Container>
  )
}
