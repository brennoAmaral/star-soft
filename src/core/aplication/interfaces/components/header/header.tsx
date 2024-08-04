'use client'
import { asideActions } from "@/core/aplication/store/reducers/aside-controler/aside-controller";
import { RootState } from "@/core/aplication/store/store";
import { useDispatch, useSelector } from "react-redux";
import SvgBag from "../svg/svg-bag";
import SvgLogo from "../svg/svg-logo";
import style from "./header.module.scss";
export default function Header() {
  const bag = useSelector((state:RootState)=>state.bagController);
  const dispath = useDispatch()
 
  return (
    <header>
      <SvgLogo />
      <div  className={style.bagContainer} onClick={()=> dispath(asideActions.setIsOpen(true))}>
        <SvgBag />
        <span>
          {bag.qtyProducts}
        </span>
      </div>
    </header>
  );
}
