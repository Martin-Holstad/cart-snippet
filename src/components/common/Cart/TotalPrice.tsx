import styles from "./TotalPrice.module.css";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
import { type CartProduct } from "../../../types/CartProduct";

type TotalPriceProp = {
  cart: CartProduct[];
};
export default function TotalPrice({ cart }: TotalPriceProp) {
  return (
    <div className={styles.totalPrice}>
      <p>Total:</p>
      <p>{calculateTotalPrice(cart).toFixed(2)} NOK</p>
    </div>
  );
}
