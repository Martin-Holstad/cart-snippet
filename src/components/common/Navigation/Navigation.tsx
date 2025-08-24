import styles from "./Navigation.module.css";
import { useAppContext } from "../../../context/AppContext";
import Icons from "../Icons/Icons";
import { useMemo } from "react";

export default function Navigation() {
  const { isCartOpen, setIsCartOpen, cart } = useAppContext();

  function handleClick() {
    setIsCartOpen(!isCartOpen);
  }

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }, [cart]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Cart</div>
      <div className={`${styles.cartButton} cartButton`} onClick={handleClick}>
        <Icons icon="faCartShopping" color="#fff" size={20} />
        {totalQuantity > 0 && <div className={styles.cartLength}>{totalQuantity}</div>}
      </div>
    </header>
  );
}
