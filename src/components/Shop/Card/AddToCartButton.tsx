import styles from "./AddToCartButton.module.css";
import { type Product } from "../../../types/Product";
import { useAppContext } from "../../../context/AppContext";
import addToCart from "../../../actions/postRequests/addToCart";

type AddToCartButtonProp = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProp) {
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
    <div className={`${styles.addToCartButton} cartButton`} onClick={() => handleAddToCart()}>
      Add to cart
    </div>
  );
}
