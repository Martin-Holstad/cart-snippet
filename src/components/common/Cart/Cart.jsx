import styles from "./Cart.module.css";
import { useRef, useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import getCart from "../../../actions/getRequests/getCart";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import TopBar from "./TopBar";
import Card from "./Card/Card";
import TotalPrice from "./TotalPrice";

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cart } = useAppContext();
  const cartRef = useRef(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const results = await getCart();
        setProducts(results);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [cart]);

  function handleClickOutside(event) {
    if (cartRef.current?.contains(event.target) || event.target.classList.contains("cartButton")) return;

    setIsCartOpen(false);
  }

  useOnClickOutside(cartRef, handleClickOutside);

  return (
    <div className={`${styles.cart} ${isCartOpen ? styles.active : ""}`} ref={cartRef}>
      <TopBar />
      <div className={styles.cards}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {cart.length === 0 && <p className={styles.emptyCartMessage}>Cart is empty!</p>}
      <TotalPrice cart={cart} />
    </div>
  );
}
