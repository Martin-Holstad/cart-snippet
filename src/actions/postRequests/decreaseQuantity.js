export default async function decreaseQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const found = cart.find((item) => item.id === id);

  if (found && found.quantity > 1) {
    found.quantity = found.quantity - 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
}
