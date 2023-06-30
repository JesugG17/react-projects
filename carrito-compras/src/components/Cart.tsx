import { useState } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import { Product } from '../interfaces/products';

export const Cart = () => {
  
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { cart, addToCart, clearCart } = useCart();

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
              cart.map( item => {
                return (
                  <li>
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                    <div>
                      <strong>{item.product.title}</strong> - ${item.product.price}
                    </div>
                    <footer>
                      <small>Qty: {item.quantity}</small>
                      <button onClick={() => addToCart(item.product)}>+</button>
                    </footer>
                    <hr />
                  </li>
                )
              })
            }

           
          </ul>
          <button onClick={clearCart}><ClearCartIcon /></button>
        </aside>
        
    </>
  )
}
