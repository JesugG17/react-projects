import { SyntheticEvent, useState, useEffect } from "react";
import { Product } from "./types/products";
import { Products } from "./components/Products";
import { Header } from "./components/Header";

type Filters = {
  category: string;
  minPrice: number;
}

const INITIAL_STATE: Filters = {
  category: 'all',
  minPrice: 550
};

export const App = () => {
  const [range, setRange] = useState(0);
  const [products, setProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Filters>(INITIAL_STATE);

  const filterProducts = ( products: Product[] ) => {
      return products.filter( product => (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      ));
  }

  const filteredProducts = filterProducts(products);

  

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then( resp => resp.json())
    .then( data => setProducts(data.products));
  }, []);


  return (
    <>
      <Header />
      <Products  
        products={ filteredProducts }
      />
    </>
  );
};
