import React from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { ButtonAddRemove } from '../../components/ButtonAddRemove';
import { CafilicacionProducto } from '../../components/CafilicacionProducto';
import { Layout } from '../../components/Layout';
import { Button } from '../../styled/Games.module';
import { Description, Header, ImageContainer, InfoContainer, Price, ProductContainer, ProductName } from '../../styled/Product.module';

const imgSrc = require('../../assets/smir.png');
const ProductoPage = () => {

    return (
        <Layout>
            <Header>

                <IoIosArrowDropleft size="4rem" style={{ marginBottom: '3rem' }} />
                <ProductContainer>
                    <ImageContainer>
                        <img src={imgSrc.default.src} />
                    </ImageContainer>
                    <InfoContainer>
                        <p>Vodka</p>
                        <ProductName>Smirnoff Original</ProductName>
                        <CafilicacionProducto calif={2} />
                        <Price className='price'>
                            $ 1800
                        </Price>
                    </InfoContainer>
                </ProductContainer>
                <Description>
                    <h3>Descripcion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eum dolores soluta est officiis quis, delectus beatae eveniet dicta voluptatibus porro aliquam placeat, animi debitis odit iure fugiat. Autem, totam?</p>
                </Description>
                
                    <ButtonAddRemove/>
                
            </Header>
        </Layout>
    )
}

export default ProductoPage;
