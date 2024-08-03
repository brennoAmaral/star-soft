import { RootState } from "@/core/aplication/store/store";
import { useSelector } from "react-redux";
import CardBuyBag from "./components/card-buy-product";

export default function FormBuyBag(){
  const products = useSelector((state:RootState)=>state.bagController.products)
  return(
    <form style={{height:'100%', margin:'20px 0', display:'flex', flexDirection:'column', gap:'20px', overflowX:'auto', borderRadius: '8px'}}>
      {products.map(products=><CardBuyBag {...products}/>)}
    </form>
  );
}