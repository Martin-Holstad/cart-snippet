import styles from "./TotalPrice.module.css";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
export default function TotalPrice({ cart }) {
  return (
    <div className={styles.totalPrice}>
      <p>Total:</p>
      <p>{calculateTotalPrice(cart).toFixed(2)} NOK</p>
    </div>
  );
}
