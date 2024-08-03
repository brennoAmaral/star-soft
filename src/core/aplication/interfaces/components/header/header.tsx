'use client'
import { asideActions } from "@/core/aplication/store/reducers/aside-controler/aside-controller";
import { RootState } from "@/core/aplication/store/store";
import { useDispatch, useSelector } from "react-redux";
import FormBuyBag from "../form-buy-products/form-buy-bag";
import SvgBag from "../svg/svg-bag";
import SvgLogo from "../svg/svg-logo";
import style from "./header.module.scss";
export default function Header() {
  const bag = useSelector((state:RootState)=>state.bagController);
  const dispath = useDispatch()
  function onViewBag(){
    
    dispath(asideActions.setChildrens([<FormBuyBag key={1}/>]))
    dispath(asideActions.setIsOpen(true))
  }
  return (
    <header>
      <SvgLogo />
      <div className={style.bagContainer} onClick={()=>onViewBag()}>
        <SvgBag />
        <span>
          {bag.qtyProducts}
        </span>
      </div>
    </header>
  );
}
