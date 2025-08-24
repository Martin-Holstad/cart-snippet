import { type Product } from "../../types/Product";

export default async function getProducts(): Promise<Product[]> {
  return products;
}

const products: Product[] = [
  { id: 1, title: "Oak side table", price: 1200, discount: 0, src: "/images/product1.jpg", alt: "product1" },
  { id: 2, title: "Wooden vases", price: 600, discount: 0, src: "/images/product2.jpg", alt: "product2" },
  { id: 3, title: "White couch setup", price: 1000, discount: 32, src: "/images/product3.jpg", alt: "product3" },
  { id: 4, title: "Porcelain jar", price: 700, discount: 0, src: "/images/product4.jpg", alt: "product4" },
  { id: 5, title: "Chrome reading lamp", price: 2500, discount: 0, src: "/images/product5.jpg", alt: "product5" },
  { id: 6, title: "Kitchen sitting group", price: 7000, discount: 20, src: "/images/product6.jpg", alt: "product6" },
  { id: 7, title: "Black cozy reading lamp", price: 550, discount: 0, src: "/images/product7.jpg", alt: "product7" },
  { id: 8, title: "Green wooden nightstand", price: 700, discount: 0, src: "/images/product8.jpg", alt: "product8" },
];
