"use client";
import { asideActions } from "@/core/aplication/store/reducers/aside-controler/aside-controller";
import { RootState } from "@/core/aplication/store/store";
import { motion } from "framer-motion";
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
  children,
}: IAsideParams) {
  const aside = useSelector((state: RootState) => state.asideController);
  const dispatch = useDispatch();

  const closeAside = () => {
    dispatch(asideActions.setIsOpen(false));
  };

  const preventClose = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      className={`${style.backgroudAside} ${customSassBackground}`}
      initial={{ x: "-100%" }}
      animate={{ x: aside.isOpen ? 0 : "100%" }}
      onClick={closeAside}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        width: aside.isOpen ? "100vw" : "fit-content",
        right: aside.isOpen ? "0" : "-1000px",
        transition: "100ms",
      }}
    >
      <div
        className={`${style.aside} ${customSassCard}`}
        onClick={preventClose}
      >
        <div className={style.headerAside}>
          <RoundedButton
            onClick={closeAside}
            type="button"
            customSass={style.headerButton}
          >
            <SvgArrowLeft />
          </RoundedButton>
          {tittle}
        </div>
        {children}

        <Button
          text="Finalizar Compra!"
          onClick={() => console.log("comprar")}
        />
      </div>
    </motion.div>
  );
}
