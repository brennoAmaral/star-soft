import getProducts, { IGetProductParams } from "@/infra/http/products/http-get-products";
import { useQuery } from "react-query";


export default function useCacheProductsGetAll(params:IGetProductParams){
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(params),
  });
} 