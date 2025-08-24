import { type Dispatch, type SetStateAction } from "react";
import { type CartProduct } from "../../../../types/CartProduct";
import decreaseQuantity from "../../../../actions/postRequests/decreaseQuantity";

type decreaseArgs = {
  product: CartProduct;
  setCart: Dispatch<SetStateAction<CartProduct[]>>;
};

export default async function decrease({ product, setCart }: decreaseArgs) {
  try {
    const resulsts = await decreaseQuantity(product.id);
    setCart(resulsts);
  } catch (error) {
    console.error(error);
  }
}
