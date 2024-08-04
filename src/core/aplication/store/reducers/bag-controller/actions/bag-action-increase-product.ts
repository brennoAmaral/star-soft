import { IBag } from "../type-bag-controller";
import { calculetTotalProducts } from "./shared";
import { IPayload } from "./type-shared";

export default function bagActionIncreaseProduct(
  bag: IPayload<IBag>,
  id: number
) {
  let indexProduct = bag.products.findIndex((product) => product.id === id);
  let product =  bag.products[indexProduct]
  product.qty ++;
  bag.qtyProducts = calculetTotalProducts(bag.products);
}
