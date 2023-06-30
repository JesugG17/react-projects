import { Filters } from "../hooks/useFilter";
import { Product } from "../interfaces/products";

export const filterProducts = ( products: Product[], filters: Filters ) => {
    return products.filter( product => (
      product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    ));
}