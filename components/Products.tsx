import React from 'react';
import { useSearcher } from '../hooks/useSearcher';
import { ProductsContainer, Section, Title } from '../styled/Global.module';
import { ProductCardHorizontal } from './ProductCardHorizontal';
import { ProductCardVertical } from './ProductCardVertical';

const prods = [
    { id: 'smirnoff950ml',price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { id: 'evwevewvew',price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { id: 'tyytnyny',price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { id: '88938378',price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
    { id: 'rvmewnytynymo828v8e',price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { id: 'rvmewm873783o828v8e',price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { id: 'rvmrrewm7387838o828v8e',price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { id: 'rvmvrvrw786mor828v8e',price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
    { id: 'rvmrevree78687wmo828v8e',price: 2050, img: require('../assets/smir.png'), desc: "cewvwevwev" },
    { id: 'rvme78876wmo828v8e',price: 1900, img: require('../assets/chandon.png'), desc: "cewvwevwev" },
    { id: '86786786',price: 1200, img: require('../assets/bronca.png'), desc: "cewvwevwev" },
    { id: 'rvmevervwmo828v8e',price: 1400, img: require('../assets/gancia.png'), desc: "cewvwevwev" },
];
const prodsProm = [
    { id: '818ver417v8r1',price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { id: 'vervvrv',price: 1900, img: require('../assets/chandon.png'), description: 'Chandon 900ml' },
    { id: '2881282',price: 1200, img: require('../assets/bronca.png'), description: 'Fernet Branca 750ml' },
    { id: '2vr282v8r',price: 1900, img: require('../assets/smir.png'), description: 'Vodka Smirnof 750ml' },
    { id: 'vrev',price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { id: 'evr8828',price: 2490, img: require('../assets/combo.png'), description: 'Combo  2 CocaCola 2.25L + Fernet Branca 750ml ' },
    { id: '8828',price: 1900, img: require('../assets/chandon.png'), description: 'Chandon 900ml' },
    { id: 'revr828',price: 1200, img: require('../assets/bronca.png'), description: 'Fernet Branca 750ml' },
    { id: 'erv282',price: 1900, img: require('../assets/smir.png'), description: 'Vodka Smirnof 750ml' },
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
                            key={prod.id}
                            img={prod.img}
                            price={prod.price}
                            description={prod.desc}
                            id={prod.id}
                        />
                    ))
                }
            </ProductsContainer>
            <ProductsContainer>
                <Title>Promociones</Title>
                {
                    prodsProm.map(({description,id,img,price}) => (
                        <ProductCardHorizontal
                            key={id}
                            img={img}
                            price={price}
                            description={description}
                            id={id}
                        />
                    ))
                }
            </ProductsContainer>
        </Section>
    )
}
