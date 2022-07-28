import { ItemCart } from "./CartContext";

export interface CartState {
    cart: ItemCart[];
}

export type CartAction =
    | { type: 'addItem', payload: ItemCart }
    | { type: 'searchItem', payload: string }
    | { type: 'removeItem', payload: string }
    | { type: 'updateItem', payload: { itemId: string, quant: number } }
    | { type: 'clearCart' };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch(action.type){
        case 'addItem':
            const prevItem = state.cart.find( item => item.id === action.payload.id);

            return prevItem ? {
                ...state,
                cart: state.cart.map( item => (
                    item.id === action.payload.id ?
                    {...item, quatity: item.quatity + 1} 
                    :
                    item
                ))
            }
            :
            {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}