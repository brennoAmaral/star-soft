import { IBag } from "../type-bag-controller";


function reduceTotalQty(bag: IBag) {
  bag.qtyProducts =  bag.products.reduce((accumulator, product) => {
    return accumulator + product.qty;
  }, 0);
}

function updateTotalPrice(
  bag: IBag
) {
  bag.totalPrice = bag.products.reduce((acc, product) => {
    return acc + (product.price * product.qty);
  }, 0);
}

export default function updateTotalsBag(
  bag: IBag
) {
  reduceTotalQty(bag)
  updateTotalPrice(bag)
}
