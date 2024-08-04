'use client'
import PageProducts from "@/core/aplication/interfaces/pages/page-products/page-products";
import { RootState } from "@/core/aplication/store/store";
import { useSelector } from "react-redux";

export default function Home() { 
  const asideIsOpen = useSelector((state:RootState)=>state.asideController.isOpen);
  return (
    <main style={{overflow: asideIsOpen?'hidden':'auto', height:'100vh'}}>
      <PageProducts/>
    </main>
  );
}
