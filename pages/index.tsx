import type { NextPage } from 'next'
import { useContext } from 'react'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Products } from '../components/Products'
import { CartContext, ItemCart } from '../context/CartContext'

const prod:ItemCart = {
  id: '28292dc',
  name: 'smirlo',
  quatity: 3,
  price: 850
}
const Home: NextPage = () => {

  const {addItemToCart} = useContext(CartContext);
  return (
    <Layout>
      <Header />
      <button onClick={() => addItemToCart(prod)}>agregar al carrito</button>
      <Products />
    </Layout>
  )
}

export default Home
