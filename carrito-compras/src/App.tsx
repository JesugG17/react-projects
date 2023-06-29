import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilter } from "./hooks/useFilter";

export const App = () => {
  
  const { products } = useFilter();

  return (
    <>
      <Header />
      <Products  
        products={ products }
      />
    </>
  );
};

