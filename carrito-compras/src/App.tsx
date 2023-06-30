import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilter } from "./hooks/useFilter";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartProvider";

export const App = () => {
  
  const { products } = useFilter();

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products  
        products={ products }
      />
    </CartProvider>
  );
};

