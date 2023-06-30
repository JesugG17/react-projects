import { Product } from "./products";

export type Cart = {
    product: Product
    quantity: number;
}

export type Action = 
 | { type: CartActionKind; payload: Cart;}
 | { type: CartActionKind; payload: null}

export enum CartActionKind {
    ADD_TO_CART = 'ADD',
    REMOVE_FROM_CART = 'REMOVE',
    CLEAR_CART = 'CLEAR'
}