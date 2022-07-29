import React, { FC } from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Link from 'next/link';

const Card = styled.div`
   width: 90%;
   height: 120px;
   padding: 1rem;
   background-color: #F4F4F4;
   box-shadow: 2px 2px 4px #adadad;
   position:relative;
   border-radius: 10px;
   display:grid;
   grid-template-columns: 30% 70%;
   margin: 2rem auto;
`;

const Image = styled.img`
    position: absolute;
    left: 5px; top: -1rem;
    height: 120px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(2px 2px 4px #222);
`;

const DescriptionDiv = styled.div`
   padding: 0 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
`;

const Price = styled.div`
    margin: 0;
    font-size: 2.2rem;
    font-weight: bold;
    color: #242424;
    z-index: 1;
    span{
        font-size: 1.8rem;
        font-weight: 500;
        color: #717171;
        margin: 0 1rem; 
        text-decoration:line-through;
    }
`
const TextDescription = styled.p`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #343434;
    z-index: 1;
`;

const Cart = styled.div`
  position: absolute;
  background-color: #eae9e8;
  border-radius:  0 0 0 100px;
  top: 0; right: 0;
  padding: 5px 0 3rem 5rem;
  z-index: 0;
  width: 100px;
  height: 80px;
`;

interface Props {
    img: any;
    price: number;
    description: string;
    id: string;
}
export const ProductCardHorizontal: FC<Props> = ({ img, price, description, id }) => {
    return (
        <Link href={`producto/${id}`}>
        <Card>
            <Cart/>
                <div><Image src={img.default.src} /></div>
                <DescriptionDiv>
                    <Price className='price'>{`$ ${price}`}<span>{`$ ${price + 200}`}</span></Price>
                    <TextDescription>
                        {description}
                    </TextDescription>
                </DescriptionDiv>
            
        </Card>
        </Link>
    )
}
