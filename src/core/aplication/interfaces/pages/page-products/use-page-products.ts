import cacheProducts from "@/infra/cache/products/cache-products";
import { useEffect, useState } from "react";

export default function usePageProducts() {

  const initialValues = {
    textButton: "Ver mais",
    countProducts: 10,
    percentLoaded: 0,
    page: 1,
  }

  const [page, setPage] = useState<number>(initialValues.page)
  const [countProducts, setCountProducts] = useState<number>(initialValues.countProducts)
  const [totalProducts, setTotalProduct] = useState<number>(0)
  const [percentLoaded, setPercentLoaded] = useState<number>(0)
  const [textButton, setTextButton] = useState<string>(initialValues.textButton)

  const { data, isLoading, refetch} = cacheProducts.getAll({
    page: page,
    limit: 10,
  });



  const productsData = data?.data
  const metaData = data?.metadata

  const [productsToShow, setProductsToShow] = useState<IProduct[]>([])

  async function calcularPorcentagem(totalLoaded: number, totalAvailable?: number) {
    if (!totalAvailable) return initialValues.percentLoaded; // Evita divisão por zero
    return (totalLoaded / totalAvailable) * 100;
  }

  async function controllerGroupToShow(){
    setTimeout(
      ()=> window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }),
      1
    )
    
    if(!metaData?.hasNextPage){
      setPage(initialValues.page)
      setCountProducts(initialValues.countProducts)
      return
    }
    setPage(page+1);
  }

  

  useEffect(()=>{
    async function showInitialProducts(){
      if(!productsData) return
      setCountProducts(countProducts+data.data.length)
      setTotalProduct(data.metadata.count)
      setProductsToShow(productsData)
      setPercentLoaded(await calcularPorcentagem(countProducts, data.metadata.count))
    } 
    showInitialProducts()
  }, [productsData])
  

  
  
    useEffect(()=>{
      async function searchMoreProducts(){
        setPercentLoaded(await calcularPorcentagem(countProducts, totalProducts))
        refetch()
      }
      searchMoreProducts()
    }, [page])
    

  useEffect(()=>{
    async function changeTextButton(){
      if(percentLoaded >= 100){
        setTextButton('Você já viu tudo!')
      }
      if(percentLoaded < 100 && textButton !== initialValues.textButton){
        setTextButton(initialValues.textButton)
      }
    }
    changeTextButton()
  }, [percentLoaded])

  return {
    data,
    productsToShow,
    controllerGroupToShow,
    percentLoaded,
    isLoading,
    textButton
  };
}
