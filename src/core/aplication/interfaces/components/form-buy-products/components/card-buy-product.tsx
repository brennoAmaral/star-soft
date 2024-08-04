import { bagActions } from "@/core/aplication/store/reducers/bag-controller/reducer-bag-controller";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Card from "../../card/card";
import Price from "../../price/price";
import QuantityControl from "../../quantity-control/quantity-control";
import RoundedButton from "../../rounded-button/rounded-button";
import SvgTrash from "../../svg/svg-trash";
import style from "./card-buy-products.module.scss";
import { ICardBuyProductParams } from "./type-card-buy-product";
export default function CardBuyBag({
  id,
  image,
  name,
  price,
  description,
  qty,
}: ICardBuyProductParams) {
  const dispatch = useDispatch()
  const contentCard = [
    <Image
      key='1'
      src={image}
      alt=""
      width={130}
      height={130}
      className={style.image}
    />,
    <div 
    key='2'
    className={style.infoProduct}>
      <span>{name}</span>
      <div className={style.description}>
        <p>{description}</p>
      </div>
      <Price type="etherium" price={price} />
      <QuantityControl id={id} qty={qty}/>
    </div>,
    <RoundedButton key='3'onClick={() => dispatch(bagActions.removeProductById(id))} children={<SvgTrash />} customSass={style.roundedButton} />,
  ];
  return <Card childrens={contentCard} customSass={style.cardBuyProduct} />;
}
