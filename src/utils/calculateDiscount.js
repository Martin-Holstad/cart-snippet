export default function calculateDiscount(price, discount) {
  return price - price * (discount / 100);
}
