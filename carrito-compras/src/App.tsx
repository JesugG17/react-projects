import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilter } from "./hooks/useFilter";

export const App = () => {
  
  const { products, setFilters } = useFilter();

  return (
    <>
      <Header 
        setFilters={ setFilters }
      />
      <Products  
        products={ products }
      />
    </>
  );
};

