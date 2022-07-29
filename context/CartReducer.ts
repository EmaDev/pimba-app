import { ItemCart } from "./CartContext";

export interface CartState {
    cart: ItemCart[];
}

export type CartAction =
    | { type: 'addItem', payload: ItemCart }
    | { type: 'removeItem', payload: string }
    | { type: 'updateItem', payload: { itemId: string, quant: number } }
    | { type: 'clearCart' };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'addItem':
            const prevItem = state.cart.find(item => item.id === action.payload.id);
            return prevItem ? {
                ...state,
                cart: state.cart.map(item => (
                    item.id === action.payload.id ?
                        { ...item, quatity: item.quatity + action.payload.quatity }
                        :
                        item
                ))
            }
                :
                {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
        case 'removeItem':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'updateItem':
            const itemSearched = state.cart.find(item => item.id === action.payload.itemId);
            return itemSearched ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.itemId ?
                    { ...item, quatity: action.payload.quant }
                    :
                    item)
            }
                :
                { ...state }
        case 'clearCart':
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}