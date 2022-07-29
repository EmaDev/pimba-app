import React, { FC } from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PriceContainer } from '../styled/Global.module';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: string;
    img: any;
    price: number;
    description: string;
}

const Card = styled.div`
   min-width: 150px;
   background-color: #F4F4F4;
   box-shadow: 2px 2px 4px #adadad;
   position:relative;
   margin-right: 1rem;
   border-radius: 10px;
   cursor: pointer;

   &:hover{
    background-color: #e9e9e9;
    box-shadow: 0 0 15px #adadad;
    transition: .3s;
   }
`;

const ImageContainer = styled.div`
   height: 150px;
   img{
    position: absolute;
    left: 0; right: 0; top: -2rem;
    margin:auto;
    height: 170px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(2px 2px 4px #222);
   }
`;
export const ProductCardVertical: FC<Props> = ({ id,img, price, description }) => {
    return (
        <Card>
            <Link href={`/producto/${id}`}>
                <ImageContainer>
                    <img src={img.default.src}
                        alt={description}
                    />
                </ImageContainer>
            </Link>
            <PriceContainer>
                <p className='price'>{`$ ${price}`}</p>
                <HiOutlineShoppingCart size="2.5rem" />
            </PriceContainer>
        </Card>
    )
}
