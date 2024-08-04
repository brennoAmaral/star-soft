import { RootState } from "@/core/aplication/store/store";
import { useSelector } from "react-redux";
import CardBuyBag from "./components/card-buy-product";

export default function FormBuyBag(){
  const bag = useSelector((state:RootState)=>state.bagController)
  return(
    <form key='1' style={{height:'100%', margin:'20px 0', display:'flex', flexDirection:'column', gap:'20px', overflowX:'auto', borderRadius: '8px'}}>
      {bag.products.map((products, index)=><CardBuyBag key={index} {...products}/>)}
    </form>
  );
}