import { asideActions } from "@/core/aplication/store/reducers/aside-controler/aside-controller";
import { bagActions } from "@/core/aplication/store/reducers/bag-controller/reducer-bag-controller";
import { RootState } from "@/core/aplication/store/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button";
import Price from "../price/price";
import CardBuyBag from "./components/card-buy-product";
import style from "./form-buy-bag.module.scss";
export default function FormBuyBag() {
  const bag = useSelector((state: RootState) => state.bagController);
  const dispatch = useDispatch();
  return (
    <form key="1" className={style.form}>
      <div style={{ overflow: "hidden", height: "100%", borderRadius: "8px" }} className="teste">
        <div className={style.cardBuyBagContainer}>
          {bag.products.map((products, index) => (
            <CardBuyBag key={index} {...products} />
          ))}
        </div>
      </div>
      <div className={style.total}>
        <span>TOTAL</span>
        <Price type="etherium" price={bag.totalPrice} />
      </div>
      <Button
          text="Finalizar Compra!"
          onClick={() => {
            dispatch(asideActions.setIsOpen(false))
            dispatch(bagActions.removeAllProduct())
          }}
        />
    </form>
  );
}
