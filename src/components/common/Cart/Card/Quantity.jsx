import styles from "./Quantity.module.css";
import { useAppContext } from "../../../../context/AppContext";
import decrease from "./decrease";
import increase from "./increase";
import Icons from "../../Icons/Icons";
export default function Quantity({ product }) {
  const { quantity } = product;
  const { setCart } = useAppContext();
  return (
    <div className={styles.quantityWrapper}>
      <div className={styles.decreaeButton} onClick={() => decrease({ product, setCart })}>
        <Icons icon="faMinus" color="#ffff" size="10px" />
      </div>
      <p>{quantity}</p>
      <div className={styles.increaseButton} onClick={() => increase({ product, setCart })}>
        <Icons icon="faPlus" color="#ffff" size="10px" />
      </div>
    </div>
  );
}
