import { IBag } from "../type-bag-controller";
import { calculetTotalProducts } from "./shared";

export default function bagActionRemoveProduct(id:number, bag: IBag) {
  const indexToDelete = bag.products.findIndex(product=> product.id === id)
  if(indexToDelete>-1){
    bag.products.splice(indexToDelete, 1)
    bag.qtyProducts = calculetTotalProducts(bag.products)
  }
}
