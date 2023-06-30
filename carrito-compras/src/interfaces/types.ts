import { Product } from "./products";

export type Cart = {
    product: Product
    quantity: number;
}

export type Action = {
    type: CartActionKind;
    payload: Product
}

export enum CartActionKind {
    ADD_TO_CART = 'ADD',
    REMOVE_FROM_CART = 'REMOVE',
    CLEAR_CART = 'CLEAR'
}