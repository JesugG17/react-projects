import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilter } from "./hooks/useFilter";
import { Cart } from "./components/Cart";

export const App = () => {
  
  const { products } = useFilter();

  return (
    <>
      <Cart />
      <Header />
      <Products  
        products={ products }
      />
    </>
  );
};

