"use client";
import { bagActions } from "@/core/aplication/store/reducers/bag-controller/reducer-bag-controller";
import { useDispatch } from "react-redux";
import Button from "../button/button";
import SvgArrowLeft from "../svg/svg-arrow-left";
import style from "./aside.module.scss";
import IAsideParams from "./type-aside";
export default function Aside({
  childrens,
  customSassBackground,
  customSassCard,
  tittle,
}: IAsideParams) {
  
  const dispatch = useDispatch();
  return (
    <div
      className={`${style.backgroudAside} ${customSassBackground}`}
      // initial={{ y: 5, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -5, opacity: 0 }}
      // transition={{ duration: 0.3 }}
      // key={"empty"}
    >
      <div className={`${style.aside} ${customSassCard}`}>
        <div className={style.headerAside}>
          <div>
            <SvgArrowLeft />
          </div>
          {tittle}
        </div>
        {childrens}

        <Button
          text="excluir 1"
          onClick={() => dispatch(bagActions.removeProductById(1))}
        />
      </div>
    </div>
  );
}
