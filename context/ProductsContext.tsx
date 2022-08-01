import React, { createContext, useEffect, useState } from 'react';
import { getAllProducts, getProductById } from '../firebase/products';

interface ProductContextProps {
  allProducts: Product[];
  promotionalProducts: Product[];
  isLoading: boolean;
  getProductByIdFromDB: (id:string) => void;
}
export const ProductsContext = createContext({} as ProductContextProps);

export interface Product {
  id: string;
  name: string;
  price:number;
  stock:number;
  description: string;
  promotion?:boolean;
  image: string;
}

export const ProductsProvider = ({children}:any) => {

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [promotionalProducts, setPromotionalProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  
  useEffect( () => {
    getProductsFromDB();
  },[]);
  
  const getProductsFromDB = async() => {
    const prods:any = await getAllProducts();
    setAllProducts(prods.normal);
    setPromotionalProducts(prods.promotion);
    setIsLoading(false);
  }

  const getProductByIdFromDB = async(id:string) => {
    const prod = await getProductById(id);
     return prod;
  }
  
  return (
    <ProductsContext.Provider
    value={{
      allProducts,
      promotionalProducts,
      isLoading,
      getProductByIdFromDB
    }}
    >
        {children}
    </ProductsContext.Provider>
  )
}
