import styles from "./RemoveButton.module.css";
import { useAppContext } from "../../../../context/AppContext";
import removeFromCart from "../../../../actions/postRequests/removeFromCart";
import Icons from "../../Icons/Icons";

export default function RemoveButton({ id }) {
  const { setCart } = useAppContext();

  async function handleRemove() {
    try {
      const results = await removeFromCart(id);
      setCart(results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.removeButton} onClick={() => handleRemove()}>
      <Icons icon="faTrash" color="#fff" size="12px" />
    </div>
  );
}
