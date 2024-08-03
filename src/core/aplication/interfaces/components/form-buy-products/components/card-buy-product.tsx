import { IBagProduct } from "@/core/aplication/store/reducers/bag-controller/type-bag-controller";
import Image from "next/image";
import Card from "../../card/card";
import Price from "../../price/price";
import RoundedButton from "../../rounded-button/rounded-button";
import SvgTrash from "../../svg/svg-trash";
import style from "./card-buy-products.module.scss";
export default function CardBuyBag({
  id,
  image,
  name,
  price,
  description,
  qty,
}: IBagProduct) {
  const contentCard = [
    <Image
      src={image}
      alt=""
      width={130}
      height={130}
      className={style.image}
    />,
    <div className={style.infoProduct}>
      <span>{name}</span>
      <div className={style.description}>
        <p>{description}</p>
      </div>
      <Price type="etherium" price={price} />
      <span>{qty}</span>
    </div>,
    <RoundedButton onClick={() => {}} children={<SvgTrash />} customSass={style.roundedButton} />,
  ];
  return <Card childrens={contentCard} customSass={style.cardBuyProduct} />;
}
