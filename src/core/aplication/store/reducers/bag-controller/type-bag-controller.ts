export interface IBagProduct extends IProduct {
  qty: number;
}
export interface IBag {
  products: IBagProduct[];
  qtyProducts: number;
  totalPrice: number;
}