import styles from "./Card.module.css";
import calculateDiscount from "../../../../utils/calculateDiscount";
import RemoveButton from "./RemoveButton";
import Quantity from "./Quantity";

export default function Card({ product }) {
  const { id, title, price, discount, src, alt } = product;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <Quantity product={product} />
        <div className={styles.priceWrapper}>
          <p className={`${styles.price} ${discount ? styles.discountPrice : ""}`}>{price},-</p>
          {discount ? <p className={styles.price}>{calculateDiscount(price, discount)},-</p> : ""}
        </div>
      </div>
      <RemoveButton id={id} />
    </div>
  );
}
