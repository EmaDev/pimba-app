import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

export interface ItemCart {
    id: string;
    name: string;
    quatity: number;
    price: number;
    image: string;
}

type CartContextProps  = {
    cart: ItemCart[];
    addItemToCart: (item: ItemCart) => void;
    removeItemToCart: (id: string) => void;
    updateItem: (id: string, quant: number) => void;
    deleteCart: () => void;
    searchItem: (prodId: string) => void;
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

    const removeItemToCart = (prodId:string) => {
        dispatch({type: 'removeItem', payload:prodId});
    }
    const updateItem = (prodId:string, quatity: number) => {
        dispatch({type: 'updateItem', payload: {itemId: prodId, quant: quatity}});
    }

    const deleteCart = () => {
        dispatch({type: 'clearCart'});
    }

    const searchItem = (prodId: string):ItemCart|undefined => {
        const searched = cartState.cart.find( item => item.id === prodId);
        return searched;
    }
    
    return (
        <CartContext.Provider
        value={{
            cart: cartState.cart,
            addItemToCart,
            removeItemToCart,
            updateItem,
            deleteCart,
            searchItem
        }}
        >

            {children}
        </CartContext.Provider>
    )
}