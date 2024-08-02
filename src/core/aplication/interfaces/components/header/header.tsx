'use client'
import { RootState } from "@/core/aplication/store/store";
import { useSelector } from "react-redux";
import SvgBag from "../svg/svg-bag";
import SvgLogo from "../svg/svg-logo";
import style from "./header.module.scss";
export default function Header() {
  const count = useSelector((state:RootState)=>state.counter.value);

  return (
    <header>
      <SvgLogo />
      <div className={style.bagContainer}>
        <SvgBag />
        <span>
          {count}
        </span>
      </div>
    </header>
  );
}
