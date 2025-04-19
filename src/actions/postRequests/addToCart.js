export default async function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const found = cart.find((item) => item.id === product.id);

  if (found) {
    found.quantity = (found.quantity || 1) + 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
}
