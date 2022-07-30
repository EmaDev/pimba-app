import React, { useContext } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
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
const Container = styled.div<any>`
   display:grid;
   margin: ${(basic) => basic ? '0' : '0 1rem'};
   grid-template-columns: 25% 50% 25%;
   background-color: gray;
   padding: ${(basic) => basic ? '.4rem' : '.5rem'};
   border-radius: 6px;
`;
const ButtonPlusMinus = styled.button<any>`
   margin: 0;
   border-style: none;
   display:flex;
   align-items: center;
   justify-content:center;
   padding: 0 1.3rem;
   background-color: #363636;
   color: #fff;
   font-size: ${(basic) => basic ? '2rem' : '2.5rem'};
   border-radius: 4px;
`;

const NumberText = styled.p<any>`
   margin: ${(basic) => basic ? '0 2px' : '0 5px'};
   padding: 0 1rem;
   font-size: ${(basic) => basic ? '1.9rem' : '2.2rem'};
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
    
   &:hover {
    background-color: gray;
   }
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
interface CompleteProps {
    prod: ItemCart;
}
interface SimpleProps {
    id: string;
    initialQuant:number
}
export const ButtonAddRemoveSimple = ({id, initialQuant}:SimpleProps) => {

    const {quatity, addQuatity,removeQuatity} = useAddRemove(initialQuant);
    const {updateItem} = useContext(CartContext);

    const handleUpdateItem = (increment:boolean) => {
        if(increment) {
            updateItem(id, quatity + 1);
            addQuatity();
        }else if( quatity - 1 > 0){
            updateItem(id, quatity - 1);
            removeQuatity();
        }
    }

    return (
        <Container basic>
            <ButtonPlusMinus basic onClick={() => handleUpdateItem(false)}>-</ButtonPlusMinus>
            <NumberText basic>{quatity}</NumberText>
            <ButtonPlusMinus basic onClick={() => handleUpdateItem(true)}>+</ButtonPlusMinus>
        </Container>
    )
}
export const ButtonAddRemove = ({prod}:CompleteProps) => {

    const {quatity, addQuatity,removeQuatity} = useAddRemove(1);
    const {addItemToCart} = useContext(CartContext);

    const addToCart = () => {
        addItemToCart({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quatity
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        });
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
