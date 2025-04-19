import styles from "./AddToCartButton.module.css";
import { useAppContext } from "../../../context/AppContext";
import addToCart from "../../../actions/postRequests/addToCart";

export default function AddToCartButton({ product }) {
  const { setCart, setIsCartOpen } = useAppContext();

  async function handleAddToCart() {
    try {
      const results = await addToCart(product);
      setCart(results);
      setIsCartOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`${styles.addToCartButton} cartButton`} onClick={() => handleAddToCart(product)}>
      Add to cart
    </div>
  );
}
