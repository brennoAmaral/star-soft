import { IBag } from "../type-bag-controller";
import { calculetTotalProducts } from "./shared";
import { IPayload } from "./type-shared";

export default function bagActionAddProduct(
  product: IPayload<IProduct>,
  bag: IBag
) {
  const products = bag.products;
  const isAlreadyInBag = products.some((p) => p.id === product.id);

  if (!isAlreadyInBag) {
    products.push({ ...product, qty: 1 });
    bag.products = products;
    bag.qtyProducts = calculetTotalProducts(products);
  }
  bag = bag;
}
