import { type CartProduct } from "../../types/CartProduct";

export default async function removeFromCart(id: number): Promise<CartProduct[]> {
  const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

  const newCart = cart.filter((product) => product.id != id);

  localStorage.setItem("cart", JSON.stringify(newCart));

  return newCart;
}
