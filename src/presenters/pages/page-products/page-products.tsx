"use client";
import cacheProducts from "@/infra/cache/products/cache-products";
import CardProduct from "./components/card-product";

export default function PageProducts() {
  const { data, isLoading, error } = cacheProducts.getAll({
    page: 1,
    limit: 12,
  });

  const productsData = data?.data;

  return (
    <section style={{ display: "flex", flexDirection: 'column', justifyItems: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', height: '80vh'}}>
        {productsData?.map((product, index) => {
          return <CardProduct key={index} {...product} isLoading={isLoading} />;
        })}
      </div>
    </section>
  );
}
