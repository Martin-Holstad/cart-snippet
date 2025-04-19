import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import getProducts from "../../actions/getRequests/getProducts";
import Card from "./Card/Card";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const resulsts = await getProducts();
        setProducts(resulsts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Products</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
