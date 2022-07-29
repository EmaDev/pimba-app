import type { NextPage } from 'next'
import { useContext } from 'react'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Products } from '../components/Products'
import { CartContext, ItemCart } from '../context/CartContext'

const prod:ItemCart = {
  id: '28292dc',
  name: 'bondiolita',
  quatity: 3,
  price: 850
}
const Home: NextPage = () => {

  const {addItemToCart, removeItemToCart,updateItem, deleteCart,searchItem} = useContext(CartContext);
  return (
    <Layout>
      <Header />
      <Products />
    </Layout>
  )
}

export default Home
