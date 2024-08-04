import { IBag } from "../type-bag-controller";
import { IPayload } from "./type-shared";
import updateTotalsBag from "./update-totals-bag";

export default function increaseProduct(
  bag: IPayload<IBag>,
  id: number
) {
  let indexProduct = bag.products.findIndex((product) => product.id === id);
  let product =  bag.products[indexProduct]
  product.qty ++;
  updateTotalsBag(bag)
}
