import { FC, PropsWithChildren, useState } from "react"
import { CartContext } from "./CartContext";
import { Cart } from "../interfaces/types";
import { Product } from "../interfaces/products";

export const CartProvider: FC<Props> = ({ children }) => {
  
    const [cart, setCart] = useState<Cart[]>([]);

    const addToCart = (product: Product) => {
        const productIncartIndex = cart.findIndex(({product: p}) => p.id === product.id);

        if (productIncartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productIncartIndex].quantity++;
            setCart(newCart);
            return;
        }

        const newCart: Cart = {
            product,
            quantity: 1
        };

        setCart([...cart, newCart]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart
    }}>
        { children }
    </CartContext.Provider>
  )
}

type Props = PropsWithChildren
