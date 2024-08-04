import { IBag } from "../type-bag-controller";
import bagActionRemoveProduct from "./bag-action-remove-product";
import { calculetTotalProducts } from "./shared";
import { IPayload } from "./type-shared";


export default function bagActionDecreaseProduct(
  bag: IPayload<IBag>,
  id: number
) {
  let indexProduct = bag.products.findIndex((product) => product.id === id);
  let product =  bag.products[indexProduct]
  if((product.qty-1)<1){
    bagActionRemoveProduct(id, bag)
    return
  }
  product.qty --;
  bag.qtyProducts = calculetTotalProducts(bag.products);
}