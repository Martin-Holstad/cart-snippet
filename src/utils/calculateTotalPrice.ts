import { CartProduct } from "../types/CartProduct";

export default function calculateTotalPrice(products: CartProduct[]): number {
  const totalPrice = products.reduce((accumulator, item) => {
    const discountedPrice = item.price - item.price * (item.discount / 100 || 0);
    return accumulator + discountedPrice * (item.quantity || 1);
  }, 0);

  return totalPrice;
}
