import { IBag } from "../type-bag-controller";
import { IPayload } from "./type-shared";
import updateTotalsBag from "./update-totals-bag";

export default function addProduct(
  product: IPayload<IProduct>,
  bag: IBag
) {
  const products = bag.products;
  const isAlreadyInBag = products.some((p) => p.id === product.id);

  if (!isAlreadyInBag) {
    products.push({ ...product, qty: 1 });
    bag.products = products;
    updateTotalsBag(bag)
  }
  bag = bag;
}
