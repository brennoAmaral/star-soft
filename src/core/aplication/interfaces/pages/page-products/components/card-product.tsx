import { bagActions } from "@/core/aplication/store/reducers/bag-controller/reducer-bag-controller";
import { IChildrensElement } from "@/core/shared/types/type-children";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Button from "../../../components/button/button";
import Card from "../../../components/card/card";
import Price from "../../../components/price/price";
import Skeleton from "../../../components/skeleton/skeleton";
import style from "./card-product.module.scss";
import { ICardProductsParams } from "./type-card-products";

export default function CardProduct({
  name,
  description,
  price,
  image,
  id,
  createdAt,
  isLoading,
}: ICardProductsParams) {
  const dispatch = useDispatch();
  const product = { name,
    description,
    price,
    image,
    id,
    createdAt
  }
  const ContentCard = (): IChildrensElement['childrens'] => {
    const skeletons = [
      <Skeleton key="1" customStyle={{ height: "200px" }} />,
      <Skeleton key="2" customStyle={{ height: "18px", width: "50%" }} />,
      <Skeleton key="3" customStyle={{ height: "18px" }} />,
      <Skeleton key="4" customStyle={{ height: "18px", width: "40%" }} />,
      <Skeleton key="5" customStyle={{ height: "50px" }} />,
    ];

    const loadedContent = [
      <Image
        key="1"
        src={image ?? ""}
        alt=""
        height={220}
        width={220}
        className={style.image}
        priority
      />,
      <span key="2" className={style.emphasis}>
        {name}
      </span>,
      <div key="3" className={style.description}>
        <p>{description}</p>
      </div>,
      <Price key="4" price={price} type="etherium"/>,
      <Button
        key="5"
        onClick={() => dispatch(bagActions.addProduct(product))}
        text="comprar"
      />,
    ];

    return isLoading ? skeletons : loadedContent;
  };

  return <Card customSass={style.customSassCardProduct} childrens={ContentCard()}/>;
}