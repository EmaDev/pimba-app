import React from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useAddRemove } from '../hooks/useAddRemove';

export const DivAddToCart = styled.div`
  display:flex;
  width: 90%;
  margin: 1rem auto;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 1rem;
`;
const Container = styled.div`
   display:grid;
   margin: 0 1rem;
   grid-template-columns: 25% 50% 25%;
   background-color: grey;
   padding: .5rem;
   border-radius: 6px;
`;
const ButtonPlusMinus = styled.button`
   margin: 0;
   border-style: none;
   display:flex;
   align-items: center;
   justify-content:center;
   padding: 0 1.3rem;
   background-color: #000;
   color: #fff;
   font-size: 2.5rem;
   border-radius: 4px;
`;

const NumberText = styled.p`
   margin: 0 5px;
   padding: 0 1rem;
   font-size: 2.2rem;
   color: #fff;
   text-align:center;
`;

const ButtonAddToCart = styled.button`
   width: 100%;
   background-color: #000;
   padding: 1rem;
   color: #fff;
   margin: 0 1rem;
`;
export const ButtonAddRemove = () => {

    const {quatity, addQuatity,removeQuatity} = useAddRemove(1);
    return (
        <DivAddToCart>
            <div>
                <Label>Cantidad</Label>
                <Container>
                    <ButtonPlusMinus onClick={removeQuatity}>-</ButtonPlusMinus>
                    <NumberText>{quatity}</NumberText>
                    <ButtonPlusMinus onClick={addQuatity}>+</ButtonPlusMinus>
                </Container>
            </div>
            <div>
                <Label style={{color: 'transparent'}}>vwverb</Label>
                <ButtonAddToCart>Agregar<HiOutlineShoppingCart/></ButtonAddToCart>
            </div>
        </DivAddToCart>
    )
}
