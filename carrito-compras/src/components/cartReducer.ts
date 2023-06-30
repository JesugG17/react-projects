import { Action, Cart, CartActionKind } from "../interfaces/types";

export const cartReducer = (state: Cart[], action: Action): Cart[] => {

    switch (action.type) {
        case CartActionKind.ADD_TO_CART:
            const payload = action.payload;
            const productIncartIndex = state.findIndex(({product: p}) => p.id === payload.id);

        if (productIncartIndex >= 0) {
            const newCart = structuredClone(state);
            newCart[productIncartIndex].quantity++;
            return newCart
        }


        return [...state, {
            product: payload,
            quantity: 1
        }]

        case CartActionKind.REMOVE_FROM_CART:
            return state.filter(({product: p}) => p.id !== action.payload.id);
        case CartActionKind.CLEAR_CART:
            return [];
        default:
            return state;
    }
}
