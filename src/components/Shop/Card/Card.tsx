import styles from "./Card.module.css";
import calculateDiscount from "../../../utils/calculateDiscount";
import { type Product } from "../../../types/Product";
import AddToCartButton from "./AddToCartButton";

type CardProp = {
  product: Product;
};

export default function Card({ product }: CardProp) {
  const { id, src, alt, title, price, discount } = product;

  return (
    <div key={id} className={styles.card}>
      {discount > 0 && <div className={styles.discount}>{discount}%</div>}
      <div className={styles.image}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.body}>
        <p>{title}</p>
        <div className={styles.priceWrapper}>
          <p className={`${styles.price} ${discount ? styles.discountPrice : ""}`}>{price},-</p>
          {discount ? <p className={styles.price}>{calculateDiscount(price, discount)},-</p> : ""}
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
