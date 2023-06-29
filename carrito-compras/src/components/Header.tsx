import { Filters } from "./Filters";
import { CartIcon } from "./Icons";

export const Header = () => {
  return (
    <header>
      <h1 className="title">React Shop <CartIcon /></h1>
      <Filters />
    </header>
  );
};
