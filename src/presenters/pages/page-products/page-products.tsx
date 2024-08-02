"use client";
import Button from "@/presenters/components/button/button";
import ProgressBar from "@/presenters/components/progress-bar/percent-bar";
import CardProduct from "./components/card-product";
import style from "./page-products.module.scss";
import usePageProducts from "./use-page-products";
export default function PageProducts() {
  const {isLoading, productsToShow, controllerGroupToShow, percentLoaded, textButton} = usePageProducts()

  return (
    <section className={style.section}>
      <div className={style.containerCards}>
        {productsToShow?.map((product, index) => {
          return <CardProduct key={index} {...product} isLoading={isLoading} />;
        })}
      </div>
      <div className={style.buttonProgressbar}>
        <ProgressBar percentage={percentLoaded}/>
        <Button onClick={()=> controllerGroupToShow()} text={textButton} />
      </div>

    </section>
  );
}
