export default async function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return cart;
}
