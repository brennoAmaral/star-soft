"use client";
import ProgressBar from "@/core/aplication/interfaces/components/progress-bar/percent-bar";
import Aside from "../../components/aside/aside";
import Button from "../../components/button/button";
import FormBuyBag from "../../components/form-buy-products/form-buy-bag";
import CardProduct from "./components/card-product";
import style from "./page-products.module.scss";
import usePageProducts from "./use-page-products";
export default function PageProducts() {
  const {
    isLoading,
    productsToShow,
    controllerGroupToShow,
    percentLoaded,
    textButton,
  } = usePageProducts();

  return (
    <section className={style.section}>
      <Aside tittle="Mochila de Compras" children={<FormBuyBag />} />

      <div className={style.containerCards}>
        {productsToShow?.map((product, index) => {
          return <CardProduct key={index} {...product} isLoading={isLoading} />;
        })}
      </div>
      <div className={style.buttonProgressbar}>
        <ProgressBar percentage={percentLoaded} />
        <Button onClick={() => controllerGroupToShow()} text={textButton} />
      </div>
      <footer className={style.copyRight}>
        <span>STARSOFT &copy; TODOS OS DIREITOS RESERVADOS</span>
      </footer>
    </section>
  );
}
