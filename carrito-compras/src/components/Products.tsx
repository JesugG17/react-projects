import { AddToCartIcon, ClearCartIcon } from "./Icons";
import { Product } from "../interfaces/products";
import { FC, useState } from "react";
import { useCart } from "../hooks/useCart";

export const Products: FC<Props> = ({ products }) => {
  const { cart, addToCart, clearCart } = useCart();

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
                      
                      return;
                    }
                    addToCart(product);
                  }}
                >
                  {isProductInCart ? <ClearCartIcon /> : <AddToCartIcon />}
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
