import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { ButtonAddRemove } from '../../components/ButtonAddRemove';
import { CafilicacionProducto } from '../../components/CafilicacionProducto';
import { Layout } from '../../components/Layout';
import { Spinner } from '../../components/Spinner';
import { ItemCart } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductsContext';
import { ButtonBack, Container, ContainerSpinner, Description, Header, ImageContainer, InfoContainer, Price, ProductContainer, ProductName } from '../../styled/Product.module';


export interface ProductToCart {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    stars: number;
    stock: number;
    price: number;
    quatity: number;
    combo?: boolean;
}

const ProductoPage = () => {

    const { back, asPath } = useRouter();
    const { getProductByIdFromDB } = useContext(ProductsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<ProductToCart | null>(null);

    const getData = async (id: string) => {
        const { data, ok }: any = await getProductByIdFromDB(id);
        if (ok) {
            setProduct({
                id,
                name: data.name,
                price: data.price,
                category: data.category,
                description: data.description,
                image: data.image,
                stars: 4,
                stock: data.stock,
                quatity: 1,
                combo: (data.combo) ? true : false
            });
            setIsLoading(false);
        }
    }
    useEffect(() => {
        const prodId = asPath.split('/');
        getData(prodId[2]);
    }, [asPath]);

    return (
        <Layout>
            {
                (isLoading) ?
                    <ContainerSpinner>
                        <Spinner/>
                    </ContainerSpinner>
                    :
                    <Container>
                        <Header>
                            <ButtonBack>
                                <IoIosArrowDropleft onClick={back} />
                            </ButtonBack>
                            <ProductContainer combo={product?.combo}>
                                <ImageContainer>
                                    <img src={product?.image} />
                                </ImageContainer>
                                <InfoContainer>
                                    <p>Categoria: <span>{product?.category}</span></p>
                                    <ProductName>{product?.name}</ProductName>
                                    <CafilicacionProducto calif={(product?.stars) ? product.stars : 5} />
                                    <Price className='price'>
                                        {`$ ${product?.price}`}
                                    </Price>
                                </InfoContainer>
                            </ProductContainer>
                        </Header>
                        <Description>
                            <h3>Descripcion</h3>
                            <p>{product?.description}</p>
                        </Description>
                        {
                            (product) && 
                            <ButtonAddRemove prod={product} />
                        }
                    </Container>
            }
        </Layout>
    )
}

export default ProductoPage;
