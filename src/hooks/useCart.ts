import { useEffect, useReducer } from 'react';
import { cartReducer, initialState } from '../Interfaces/cartReducer'
import type { CartItem } from '../Interfaces/CartItem';
import type { Product } from '../Interfaces/Product';

const init = (): CartItem[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

export const useCart = () => {

    const [cartState, dispatch] = useReducer(cartReducer, initialState, init);
    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartState));
      }, [cartState]);


      const handleAddToCart = (product: Product) => {
        dispatch({
            type: "ADD_ITEM",
            payload: product
        })
      }

      const handleRemoveFromCart = (product: Product) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: product.id
        })
      }

      const handleUpdateQuantity = (productId: string, quantity: number) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { productId, quantity }
        })
      }
      
    return{
        cartState,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity
    }

}






