import { fetcher, IApiTemplate } from "@/infra/fetcher"

export interface IGetProductParams{
  page:number
  limit:number
}

export type IGetProductsReturn = IApiTemplate<IProduct[]>

export default async function  getProducts({page = 1, limit = 20}: IGetProductParams): Promise<IGetProductsReturn>{

  const params = `page=${page}&limit=${limit}`

  const products = await fetcher<IProduct[]>(`products?${params}`)

  return products
}