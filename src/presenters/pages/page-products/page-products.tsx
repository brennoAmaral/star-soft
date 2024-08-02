"use client";
import cacheProducts from "@/infra/cache/products/cache-products";
import CardProduct from "./components/card-product";
import style from "./page-products.module.scss";
export default function PageProducts() {
  const { data, isLoading, error } = cacheProducts.getAll({
    page: 1,
    limit: 32,
  });

  const productsData = data?.data;

  return (
    <section className={style.section}>
      <div className={style.containerCards}>
        {productsData?.map((product, index) => {
          if(index>7) return null
          return <CardProduct key={index} {...product} isLoading={isLoading} />;
        })}
      </div>
    </section>
  );
}
