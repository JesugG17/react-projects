import { createContext } from "react";
import { Cart } from "../interfaces/types";
import { Product } from "../interfaces/products";

export type CartContexType = {
    cart: Cart[];
    addToCart: ( product: Product ) => void;
    clearCart: () => void; 
}

export const CartContext = createContext<CartContexType>({} as CartContexType);