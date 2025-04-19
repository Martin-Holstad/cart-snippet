import styles from "./Navigation.module.css";
import { useAppContext } from "../../../context/AppContext";
import Icons from "../Icons/Icons";
export default function Navigation() {
  const { isCartOpen, setIsCartOpen, cart } = useAppContext();

  function handleClick() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Cart</div>
      <div className={`${styles.cartButton} cartButton`} onClick={handleClick}>
        <Icons icon="faCartShopping" color="#ffff" size="20px" />
        {cart.length > 0 && <div className={styles.cartLength}>{cart.length}</div>}
      </div>
    </header>
  );
}
