import styles from "./Cart.module.css";
import { useRef, useEffect, useState } from "react";
import { type CartProduct } from "../../../types/CartProduct";
import { useAppContext } from "../../../context/AppContext";
import getCart from "../../../actions/getRequests/getCart";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import TopBar from "./TopBar";
import Card from "./Card/Card";
import TotalPrice from "./TotalPrice";

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cart } = useAppContext();

  const cartRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<CartProduct[]>([]);

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

  function handleClickOutside(event: MouseEvent | TouchEvent) {
    if (cartRef.current?.contains(event.target as Node)) return;

    if (event.target instanceof Element && event.target.classList.contains("cartButton")) {
      return;
    }

    setIsCartOpen(false);
  }

  useOnClickOutside({ ref: cartRef, handler: handleClickOutside });

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
