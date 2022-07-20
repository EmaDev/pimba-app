import React from 'react';
import { useSearcher } from '../hooks/useSearcher';
import { ProductsContainer, Section, Title } from '../styled/Global.module';
import { ProductCardHorizontal } from './ProductCardHorizontal';
import { ProductCardVertical } from './ProductCardVertical';

const prods = [
    { price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
    { price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
    { price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
];
const prodsProm = [
    { price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { price: 1900, img: require('../assets/chandon.png'), description: 'Chandon 900ml' },
    { price: 1200, img: require('../assets/bronca.png'), description: 'Fernet Branca 750ml' },
    { price: 1900, img: require('../assets/smir.png'), description: 'Vodka Smirnof 750ml' },
    { price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { price: 1900, img: require('../assets/chandon.png'), description: 'Chandon 900ml' },
    { price: 1200, img: require('../assets/bronca.png'), description: 'Fernet Branca 750ml' },
    { price: 1900, img: require('../assets/smir.png'), description: 'Vodka Smirnof 750ml' },
];

export const Products = () => {
    
    const {SearcherLayout} = useSearcher();
    return (
        <Section maxW={600}>
            
            <Title>Productos</Title>
            <SearcherLayout/>
            <ProductsContainer normal>
                {
                    prods.map((prod, i) => (
                        <ProductCardVertical
                            key={i}
                            img={prod.img}
                            price={prod.price}
                            description={prod.desc}
                        />
                    ))
                }
            </ProductsContainer>
            <ProductsContainer>
                <Title>Promociones</Title>
                {
                    prodsProm.map((prod, i) => (
                        <ProductCardHorizontal
                            key={i}
                            img={prod.img}
                            price={prod.price}
                            description={prod.description}
                        />
                    ))
                }
            </ProductsContainer>
        </Section>
    )
}
