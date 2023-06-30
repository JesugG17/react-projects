import { FC, PropsWithChildren, useEffect, useReducer } from "react"
import { CartContext } from "./CartContext";
import { Cart, CartActionKind } from "../interfaces/types";
import { Product } from "../interfaces/products";
import { cartReducer } from "../components/cartReducer";

const initialState: Cart[]  = []

export const CartProvider: FC<Props> = ({ children }) => {
  
    const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
        const storage = localStorage.getItem('cart') ?? '[]';

        return JSON.parse(storage)
    });

    const addToCart = (product: Product) => {
        dispatch({
            type: CartActionKind.ADD_TO_CART,
            payload: product
        })
    }

    const clearProductInCart = (product: Product) => {
        dispatch({
            type: CartActionKind.REMOVE_FROM_CART,
            payload: product
        })
    }

    const clearCart = () => {
        dispatch({
            type: CartActionKind.CLEAR_CART,
            payload: {} as Product
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearProductInCart,
        clearCart
    }}>
        { children }
    </CartContext.Provider>
  )
}

type Props = PropsWithChildren
