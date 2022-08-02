import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartItem } from '../components/CartItem';
import { Layout } from '../components/Layout';
import { authContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ButtonConfirmCart, Container, Section, SumaryDiv, Title } from '../styled/Cart.module';
import Swal from 'sweetalert2';

const CarritoPage = () => {

  const { cart, removeItemToCart } = useContext(CartContext);
  const {user} = useContext(authContext);
  const {push} = useRouter();

  const subtotalCalculator = () => {
    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.price * item.quatity;
    });
    return subtotal;
  }

  const handleGoToPayment = () => {
    /*if(!user){
     return console.log('no esta logeado');
    }*/
    return Swal.fire({
      title: 'Procesar compra',
      text: "Estas seguro de la realizar la compra?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra proncesada!',
          'Tu pedido fue procesadp correctamente.',
          'success'
        )
      }
    })
  }

  return (
    <Layout>
      <Container>
        {
          (cart.length === 0) ?
            <h1>El carrito esta vacio</h1>
            :
            <>
              <Section>
                {
                  cart.map(item => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      quantity={item.quatity}
                      removeItemToCart={removeItemToCart}
                    />
                  ))
                }
              </Section>
              <Section left>
                  <h2>Resumen</h2>
                  <SumaryDiv>
                    <h3>Subtotal</h3>
                    <p className='price'>{`$ ${subtotalCalculator()}`}</p>
                  </SumaryDiv>
                  <SumaryDiv>
                    <h3>Envio</h3>
                    <p className='price'>$ 125</p>
                  </SumaryDiv>
                  <SumaryDiv total>
                    <h3>Total</h3>
                    <p className='price'>{`$ ${subtotalCalculator() + 125}`}</p>
                  </SumaryDiv>

                  <ButtonConfirmCart onClick={handleGoToPayment}>Confirmar</ButtonConfirmCart>
              </Section>
            </>
        }
      </Container>
    </Layout>
  )
}

export default CarritoPage;
