import { IBagProduct } from "../type-bag-controller";

export function calculetTotalProducts(products: IBagProduct[]) {
  return products.reduce((accumulator, product) => {
    return accumulator + product.qty;
  }, 0);
}

