import addToCart from "../../../../actions/postRequests/addToCart";

export default async function increase({ product, setCart }) {
  try {
    const results = await addToCart(product);
    setCart(results);
  } catch (error) {
    console.error(error);
  }
}
