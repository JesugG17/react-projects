import { SyntheticEvent, useState, useEffect } from "react";
import { AddToCartIcon } from "./components/Icons";
import { Product } from "./types/products";

export const App = () => {
  const [range, setRange] = useState(0);
  const [data, setData] = useState<Product[]>([])

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setRange(+target.value);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then( resp => resp.json())
    .then( data => setData(data));
  }, []);
  return (
    <>
      <h1 className="title">React Shop 🛒</h1>
      <section className="search__container">
        <div className="search__input">
          <p>Precio a partir de:</p>
          <input onChange={handleChange} min="0" max="1000" type="range" />
          <p>${range}</p>
        </div>
        <div className="search__filter">
          <span>Categoria</span>
          <select>
            <option>Todos</option>
          </select>
        </div>
      </section>

      <ul className="cards__container">
        {data.slice(0,10).map((product) => (
          <li className="product__card">
            <figure>
              <img src={product.images[1]} alt="" />
            </figure>
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
    </>
  );
};
