import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { ButtonAddRemove } from '../../components/ButtonAddRemove';
import { CafilicacionProducto } from '../../components/CafilicacionProducto';
import { Layout } from '../../components/Layout';
import { Spinner } from '../../components/Spinner';
import { ItemCart } from '../../context/CartContext';
import { ButtonBack, Container, Description, Header, ImageContainer, InfoContainer, Price, ProductContainer, ProductName } from '../../styled/Product.module';

const imgSrc = require('../../assets/smir.png');

const ProductoPage = () => {

    const { back, asPath } = useRouter();
    const [product, setProduct] = useState<ItemCart>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const prodId = asPath.split('/');
        console.log(prodId[2]);
        //consumir api
        setTimeout(() => {
            setProduct({
                id: 'veverv88',
                name: 'Smirnof',
                price: 1600,
                quatity: 1
            });
            setIsLoading(false);
        }, 100);
    }, []);

    return (
        <Layout>
            {
                (!isLoading && product) ?
                    <Container>
                        <Header>
                            <ButtonBack>
                                <IoIosArrowDropleft onClick={back} />
                            </ButtonBack>
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
                        </Header>
                        <Description>
                            <h3>Descripcion</h3>
                            <p>Lorem ipsum dolor sit, animi debitis odit iure fugiat animi debitis odit iure fugiat. Autem, totam?</p>
                        </Description>
                        <ButtonAddRemove prod={product} />
                    </Container>
                    :
                    <Spinner />
            }
        </Layout>
    )
}

export default ProductoPage;
