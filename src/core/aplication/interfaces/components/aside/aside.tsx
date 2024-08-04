"use client";
import { asideActions } from "@/core/aplication/store/reducers/aside-controler/aside-controller";
import { RootState } from "@/core/aplication/store/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button";
import RoundedButton from "../rounded-button/rounded-button";
import SvgArrowLeft from "../svg/svg-arrow-left";
import style from "./aside.module.scss";
import IAsideParams from "./type-aside";
export default function Aside({
  customSassBackground,
  customSassCard,
  tittle,
  children
}: IAsideParams) {
  const aside = useSelector((state: RootState) => state.asideController);
  const dispatch = useDispatch();
  return (
    <div
      className={`${style.backgroudAside} ${customSassBackground}`}
      style={{ display: aside.isOpen ? "" : "none" }}
      // initial={{ y: 5, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -5, opacity: 0 }}
      // transition={{ duration: 0.3 }}
      // key={"empty"}
    >
      <div className={`${style.aside} ${customSassCard}`}>
        <div className={style.headerAside}>
          <RoundedButton
            onClick={() => dispatch(asideActions.setIsOpen(false))}
            type="button"
            children={<SvgArrowLeft />}
          />
          {tittle}
        </div>
        {children}

        <Button
          text="Finalizar Compra!"
          onClick={() => console.log('comprar')}
        />
      </div>
    </div>
  );
}
