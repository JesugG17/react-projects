import { useContext, useEffect, useState } from "react";
import { Product } from "../interfaces/products";
import { FiltersContext } from "../context/FiltersContext";

export type Filters = {
    category: string;
    minPrice: number;
}

export const useFilter = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { filters, setFilters } = useContext(FiltersContext);

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

    return {
        filters,
        ...filters,
        products: filteredProducts,
        setFilters
    }
}
