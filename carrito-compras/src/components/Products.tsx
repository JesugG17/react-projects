import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { Product } from "../interfaces/products";
import { FC } from "react";
import { useCart } from "../hooks/useCart";

export const Products: FC<Props> = ({ products }) => {
  const { cart, addToCart, clearProductInCart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.product.id === product.id);
  };

  return (
    <main>
      <ul className="cards__container">
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id} className="product__card">
              <img src={product.thumbnail} alt="" />
              <div>
                <p>
                  <span>
                    <b>{product.title}</b> - ${product.price}
                  </span>
                </p>
                <button
                  className={`card__button ${ isProductInCart && 'red' }`}
                  onClick={() => {
                    if (isProductInCart) {
                      clearProductInCart(product);                      
                      return;
                    }
                    addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

type Props = {
  products: Product[];
};
