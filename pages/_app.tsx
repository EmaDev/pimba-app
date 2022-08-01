import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import { authContext, AuthProvider } from '../context/AuthContext';

import '../styles/globals.css';
import { ProductsProvider } from '../context/ProductsContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default MyApp
