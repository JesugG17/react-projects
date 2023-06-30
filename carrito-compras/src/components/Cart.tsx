import { useState } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';

export const Cart = () => {
  
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { cart, clearCart } = useCart();

  return (
    <>
        <div>
            <button 
              className='floating__button'
              onClick={() => setOpenCart(!openCart)}
            >
              <CartIcon />
            </button>
        </div>

        <aside className={`cart ${openCart && 'show'}`}>
          <ul>
            {
              cart.map( item => (
                <CartItem
                  key={item.product.id} 
                  cart={ item }
                />
              ))            
            }
          </ul>
          <button onClick={clearCart}><ClearCartIcon /></button>
        </aside>
        
    </>
  )
}
