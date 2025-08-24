import { type Dispatch, type SetStateAction } from "react";
import { type CartProduct } from "../../../../types/CartProduct";
import addToCart from "../../../../actions/postRequests/addToCart";

type increaseArgs = {
  product: CartProduct;
  setCart: Dispatch<SetStateAction<CartProduct[]>>;
};

export default async function increase({ product, setCart }: increaseArgs) {
  try {
    const results = await addToCart(product);
    setCart(results);
  } catch (error) {
    console.error(error);
  }
}
