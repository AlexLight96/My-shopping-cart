import type { ActionCart } from "./ActionCart";
import type { CartItem } from "./CartItem";


 const initialState: CartItem[] = [];

 export const cartReducer = (state: CartItem[], action: ActionCart): CartItem[] => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.find(cartItem => cartItem.product.id === action.payload.id);
            
            if (existingItem) {
               
                return state.map(cartItem => 
                    cartItem.product.id === action.payload.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                
                return [...state, { product: action.payload, quantity: 1 }];
            }
        }

        case 'REMOVE_ITEM':
            return state.filter(cartItem => cartItem.product.id !== action.payload);

        case 'UPDATE_QUANTITY': {

            if(action.payload.quantity === 0) {
                return state.filter(cartItem => cartItem.product.id !== action.payload.productId);
            }
            
            return state.map(cartItem => {

                if(cartItem.product.id === action.payload.productId) {
                    return {
                        ...cartItem,
                        quantity: action.payload.quantity
                    }
                }
                return cartItem;
            });
        }

        default: 
            return state;
    }
}

export { initialState };