import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { ButtonAddRemoveSimple } from '../components/ButtonAddRemove';
import { Layout } from '../components/Layout';
import { CartContext, ItemCart } from '../context/CartContext';
import { ButtonRemove, Container, ImageContainer, ItemCard, ItemDescription, ItemQuantity, Title } from '../styled/Cart.module';

const prod: ItemCart = {
  id: 'cervre',
  name: 'smirloo',
  price: 1820,
  quatity: 8,
  image: 'vervrev'
}

const CarritoPage = () => {

  const { cart, removeItemToCart } = useContext(CartContext);

  const subtotalCalculator = () => {
    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.price * item.quatity;
    });
    return subtotal;
  }
  return (
    <Layout>
      <Container>
        <Title>Tu Carrito</Title>
        {
          cart.map(item => (
            <ItemCard key={item.id}>
              <ButtonRemove onClick={() => removeItemToCart(item.id)}>X</ButtonRemove>
              <ImageContainer>
                <img src={item.image}/>
              </ImageContainer>
              <div>
                <ItemDescription>
                  <p style={{maxWidth: '200px'}}>{item.name}</p>
                  <span className='precio'>{`$ ${item.price}`}</span>
                </ItemDescription>

                <ItemQuantity>
                  <ButtonAddRemoveSimple id={item.id} initialQuant={item.quatity} />
                  <h4>Total:<span className='precio'>{`$ ${item.price * item.quatity}`}</span></h4>
                </ItemQuantity>

              </div>
            </ItemCard>
          ))
        }

        <div>
          <h2>Subtotal</h2>
          <p>{subtotalCalculator()}</p>
        </div>
      </Container>
    </Layout>
  )
}

export default CarritoPage;
