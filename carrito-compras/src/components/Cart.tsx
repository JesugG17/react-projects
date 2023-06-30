import { useState } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';

export const Cart = () => {
  
  const [openCart, setOpenCart] = useState<boolean>(false);

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
            <li>
                <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                <div>
                  <strong>title</strong> - $price
                </div>
                <footer>
                  <small>Qty: 1</small>
                  <button>+</button>
                </footer>
                <hr />
            </li>
          </ul>
          <button><ClearCartIcon /></button>
        </aside>
        
    </>
  )
}
