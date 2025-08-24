import { type CartProduct } from "../../types/CartProduct";

export default async function decreaseQuantity(id: number): Promise<CartProduct[]> {
  const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

  const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return updatedCart;
}
