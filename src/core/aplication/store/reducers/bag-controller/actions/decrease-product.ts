import { IBag } from "../type-bag-controller";
import { removeProduct } from "./remove-product";
import { IPayload } from "./type-shared";
import updateTotalsBag from "./update-totals-bag";


export default function decreaseProduct(
  bag: IPayload<IBag>,
  id: number
) {
  let indexProduct = bag.products.findIndex((product) => product.id === id);
  let product =  bag.products[indexProduct]
  if((product.qty-1)<1){
    removeProduct(id, bag)
    return
  }
  product.qty --;
  updateTotalsBag(bag)
}