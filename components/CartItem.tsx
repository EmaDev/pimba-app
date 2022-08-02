import React from 'react';
import { ButtonRemove, ImageContainer, ItemCard, ItemDescription, ItemQuantity } from '../styled/Cart.module';
import { ButtonAddRemoveSimple } from './ButtonAddRemove';

interface Props {
    id:string;
    image:string;
    name:string;
    price: number;
    quantity:number;
    removeItemToCart: (id:string) => void;
}
export const CartItem = ({id,image,name,price,quantity, removeItemToCart}:Props) => {
    return (
        <ItemCard key={id}>
            <ButtonRemove onClick={() => removeItemToCart(id)}>X</ButtonRemove>
            <ImageContainer>
                <img src={image} />
            </ImageContainer>
            <div>
                <ItemDescription>
                    <p style={{ maxWidth: '200px' }}>{name}</p>
                    <span className='price'>{`$ ${price}`}</span>
                </ItemDescription>

                <ItemQuantity>
                    <ButtonAddRemoveSimple id={id} initialQuant={quantity} />
                    <h4>Total:<span className='price'>{`$ ${price * quantity}`}</span></h4>
                </ItemQuantity>

            </div>
        </ItemCard>
    )
}
