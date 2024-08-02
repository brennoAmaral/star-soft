import Button from "@/presenters/components/button/button";
import Card from "@/presenters/components/card/card";
import Skeleton from "@/presenters/components/skeleton/skeleton";
import SvgEtherium from "@/presenters/components/svg/svg-etherium";
import Image from "next/image";
import style from "./card-product.module.scss";
export default function CardProduct({
  name,
  description,
  price,
  image,
  id,
  isLoading,
}: ICardProductsParams) {
  const ContentCard = (): JSX.Element[] => {
    const skeletons = [
      <Skeleton key="1" customStyle={{ height: "200px" }} />,
      <Skeleton key="2" customStyle={{ height: "18px", width: "50%" }} />,
      <Skeleton key="3" customStyle={{ height: "18px" }} />,
      <Skeleton key="4" customStyle={{ height: "18px", width: "40%" }} />,
      <Skeleton key="5" customStyle={{ height: "50px" }} />,
    ];
    const loadedConted = [
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
      <div key="4" className={style.emphasis}>
        <SvgEtherium customSass={style.svgEth}/>
        <span>{`${price} ETH`}</span>
      </div>,
      <Button
        key="5"
        onClick={() => console.log(`comprando ${name}`)}
        text="comprar"
      />,
    ];

    if (isLoading) {
      return skeletons;
    }
    return loadedConted;
  };

  return <Card customSass={style.customSassCardProduct}>{ContentCard()}</Card>;
}
