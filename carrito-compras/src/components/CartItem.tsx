import { useCart } from "../hooks/useCart";
import { Cart } from "../interfaces/types";
import { FC } from "react";

export const CartItem: FC<Props> = ({ cart }) => {

    const { addToCart } = useCart();

  return (
    <li>
      <img src={cart.product.thumbnail} alt="" />
      <div>
        <strong>{cart.product.title}</strong> - ${cart.product.price}
      </div>
      <footer>
        <small>Qty: {cart.quantity}</small>
        <button onClick={() => addToCart(cart.product)}>+</button>
      </footer>
      <hr />
    </li>
  );
};

type Props = {
  cart: Cart;
};
