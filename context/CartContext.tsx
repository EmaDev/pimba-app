import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

export interface ItemCart {
    id: string;
    name: string;
    quatity: number;
    price: number;
}

type CartContextProps  = {
    cart: ItemCart[];
    addItemToCart: (item: ItemCart) => void;
    /*removeItemToCart: (id: string) => void;
    deleteCart: () => void;
    updateItem: (id: string, quant: number) => void;*/
}


export const CartContext = createContext( {} as CartContextProps);

const initialState = {
    cart: []
}

export const CartProvider = ({children}:any) => {

    const [cartState, dispatch] = useReducer(cartReducer, initialState);


    const addItemToCart = (item: ItemCart) => {
        dispatch({type: 'addItem', payload: item});
    }
    return (
        <CartContext.Provider
        value={{
            cart: cartState.cart,
            addItemToCart
        }}
        >

            {children}
        </CartContext.Provider>
    )
}