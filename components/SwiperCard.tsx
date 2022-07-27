import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
   width: 100%;
   height: 350px;
   background-color: white;
   border: 1px solid grey;
   border-radius: 6px;
   cursor: pointer;
   position:relative;
   display: flex;
   justify-content: center;
`;
const Number = styled.p`
  position:absolute;
  left: 1rem;
  top: 0;
  font-size: 5rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Contain = styled.div`
   width: 60%;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
`;

const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    margin: 0 1rem;
    font-size: 5rem;
  }
`;

interface Props {
    num: number;
}
export const SwiperCard = ({ num }: Props) => {

    return (
        <Card>
            <Number>{num}</Number>
              <Image src={require(`../assets/letters/${num}.png`)}/>
        </Card>
    )
}
