import React from 'react';
import styled from 'styled-components';
import {FcIdea} from 'react-icons/fc';

const ModalContainer = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color: rgba(0,0,0,0.8);
   position: fixed;
   z-index: 9999;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items:center; 
`;

const Modal = styled.div`
   width: 90%;
   max-width: 500px;
   padding: 0 1rem;
   background-color: white;
   border-radius: 8px;
   transition: .8s ease;
`;
const Title = styled.h2`
   text-align: center;
   font-size: 3.5rem;
   font-weight: 700;
   color: #343434;
   padding: 1rem;
   border-bottom: 1px solid #343434;
`;

const Button = styled.button` 
   width: 100%;
   padding: 1rem;
   background-color: #26282d;
   font-size: 2rem;
   color: #fff;
   border-style: none;
   margin: 1rem auto;
   border-radius: 8px;

   &:hover{
    background-color: #1a1b1e;
    color: grey;
    transition: .3s;
   }
`;

const Instructions = styled.p`
  font-size: 1.9rem;
  color: #343434;
  margin: 2rem 0;
  text-align: center;
  font-weight: 500;
`;

const Creator = styled.div`
  padding: 1rem;
  border: 1px solid #26282d;
  color: #343434;

  div{
    display:flex;
    justify-content: center;
    align-items: center;
    p{
        font-weight: 700;
        font-size: 1.6rem;
    }
  }
  p{
    text-align: center;
    margin: 0;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

interface Props {
    allowCreate?:boolean;
    creatorInstructins?: string;
    instructions: string;
    closeModal: () => void;
}
export const ModalGames = ({allowCreate, instructions,creatorInstructins , closeModal}:Props) => {
  return (
    <ModalContainer>
        <Modal>
            <Title>Reglas</Title>
            <Instructions>{instructions}</Instructions>
            
            {allowCreate && 
             <Creator>
                <div>
                  <p>Podes presionar este boton</p>
                  <FcIdea size="4rem"/>
                </div>
                <p>{creatorInstructins}</p>
            </Creator>
            }
            <Button onClick={closeModal}>Comenzar</Button>
        </Modal>
    </ModalContainer>
  )
}
