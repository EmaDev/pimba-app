import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Products } from '../components/Products';

const Home: NextPage = () => {

  return (
    <Layout>
      <Header />
      <Products />
    </Layout>
  )
}

export default Home
