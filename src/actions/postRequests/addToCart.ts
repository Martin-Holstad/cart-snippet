import { type Product } from "../../types/Product";
import { type CartProduct } from "../../types/CartProduct";

export default async function addToCart(product: Product): Promise<CartProduct[]> {
  const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

  const found = cart.find((item) => item.id === product.id);

  if (found) {
    found.quantity = (found.quantity || 1) + 1;
  } else {
    const cartProduct: CartProduct = { ...product, quantity: 1 };
    cart.push(cartProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
}
