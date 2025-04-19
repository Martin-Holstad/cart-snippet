export default async function removeFromCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const newCart = cart.filter((product) => product.id != id);

  localStorage.setItem("cart", JSON.stringify(newCart));

  return newCart;
}
