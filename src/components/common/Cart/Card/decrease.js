import decreaseQuantity from "../../../../actions/postRequests/decreaseQuantity";
export default async function decrease({ product, setCart }) {
  try {
    const resulsts = await decreaseQuantity(product.id);
    setCart(resulsts);
  } catch (error) {
    console.error(error);
  }
}
