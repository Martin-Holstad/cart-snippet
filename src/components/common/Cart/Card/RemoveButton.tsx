import styles from "./RemoveButton.module.css";
import { useAppContext } from "../../../../context/AppContext";
import removeFromCart from "../../../../actions/postRequests/removeFromCart";
import Icons from "../../Icons/Icons";

type RemoveButtonProp = {
  id: number;
};

export default function RemoveButton({ id }: RemoveButtonProp) {
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
      <Icons icon="faTrash" color="#fff" size={12} />
    </div>
  );
}
