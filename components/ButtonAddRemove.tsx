import React, { useContext } from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useAddRemove } from '../hooks/useAddRemove';
import { CartContext, ItemCart } from '../context/CartContext';

export const DivAddToCart = styled.div`
  display:flex;
  width: 90%;
  margin: 2rem auto;
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
   background-color: gray;
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
   background-color: #363636;
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
   background-color: #363636;
   padding: 1rem 0;
   color: #fff;
   margin: 0 1rem;
   border-radius: 6px;
   border-style: none;
    
   div{
    font-size: 1.8rem;
    display:flex;
    align-items:center;
    justify-content:center;

    p{
        margin: 0 5px;
    }
   }
`;
interface Props {
    prod: ItemCart;
}
export const ButtonAddRemove = ({prod}:Props) => {

    const {quatity, addQuatity,removeQuatity} = useAddRemove(1);
    const {addItemToCart} = useContext(CartContext);

    const addToCart = () => {
        addItemToCart({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quatity
        })
    }

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
                <ButtonAddToCart onClick={addToCart}>
                    <div>
                     <p>Agregar</p>
                    <HiOutlineShoppingCart/>
                    </div>
                </ButtonAddToCart>
            </div>
        </DivAddToCart>
    )
}
