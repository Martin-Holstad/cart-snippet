import styles from "./TopBar.module.css";
import { useAppContext } from "../../../context/AppContext";
import Icons from "../Icons/Icons";

export default function TopBar() {
  const { setIsCartOpen } = useAppContext();
  return (
    <div className={styles.topBar}>
      <div className={styles.header}>
        <Icons icon="faCartShopping" color="black" size={20} />
        <p>Cart</p>
      </div>
      <div className={`${styles.closeCartButton} cartButton`} onClick={() => setIsCartOpen(false)}>
        <Icons icon="faXmark" color="#948f8f" size={20} />
      </div>
    </div>
  );
}
