import { useContext, useEffect, useState } from "react";
import { Product } from "../interfaces/products";
import { FiltersContext } from "../context/FiltersContext";
import { filterProducts } from "../utils/filterproducts";

export type Filters = {
    category: string;
    minPrice: number;
}

export const useFilter = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { filters, setFilters } = useContext(FiltersContext);

    useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => setProducts(data.products));
    }, []);

  
    let filteredProducts: Product[] = [];
    if (products) {
      filteredProducts = filterProducts(products, filters);
    }
    

    return {
        filters,
        ...filters,
        products: filteredProducts,
        setFilters
    }
}
