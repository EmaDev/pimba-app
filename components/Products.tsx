import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { useSearcher } from '../hooks/useSearcher';
import { ProductsContainer, Section, Title } from '../styled/Global.module';
import { ProductCardHorizontal } from './ProductCardHorizontal';
import { ProductCardVertical } from './ProductCardVertical';
import { Spinner } from './Spinner';

export const Products = () => {

    const { SearcherLayout } = useSearcher();
    const { isLoading, allProducts, promotionalProducts } = useContext(ProductsContext);

    return (
        <Section maxW={600}>

            <Title>Productos</Title>
            <SearcherLayout title={"Buscar por nombre"}/>
            {
                (isLoading) ?
                    <div style={{margin: '3rem 1rem', padding: '1rem'}}>
                        <Spinner />
                    </div>
                    :
                    <>
                        <ProductsContainer normal>
                            {
                                allProducts.map((prod) => (
                                    <ProductCardVertical
                                        key={prod.id}
                                        product={prod}
                                    />
                                ))
                            }
                        </ProductsContainer>
                        <ProductsContainer>
                            <Title>Promociones</Title>
                            {
                                promotionalProducts.map((prod) => (
                                    <ProductCardHorizontal
                                        key={prod.id}
                                        product={prod}
                                    />
                                ))
                            }
                        </ProductsContainer>
                    </>
            }
        </Section>
    )
}
