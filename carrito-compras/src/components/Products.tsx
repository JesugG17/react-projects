import { AddToCartIcon } from "./Icons";
import { Product } from '../types/products';
import { FC } from "react";

export const Products: FC<Props> = ({ products }) => {
  return (
    <main>
      <ul className="cards__container">
        {products.slice(0, 10).map((product) => (
          <li 
            key={product.id}
            className="product__card"
            >
            <img src={product.thumbnail} alt="" />
            <div>
              <p>
                <span>
                  <b>{product.title}</b> - ${product.price}
                </span>
              </p>
              <button className="card__button">
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

type Props = {
    products: Product[]
}
