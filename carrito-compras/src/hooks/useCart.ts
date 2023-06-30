import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart must be used into a CartProvider');
    }

    return context;
}
