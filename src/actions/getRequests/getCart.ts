import { type CartProduct } from "../../types/CartProduct";

export default async function getCart(): Promise<CartProduct[]> {
  const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

  return cart;
}
