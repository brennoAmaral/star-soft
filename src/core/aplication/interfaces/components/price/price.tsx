import { coins, ICoin } from "@/core/shared/types/type-coin";
import SvgEtherium from "../svg/svg-etherium";
import style from "./price.module.scss";
import { IPriceParams } from "./type-price";
export default function Price({
  price,
  customSass,
  customSassSvg,
  type,
}: IPriceParams) {
  const svgCoin: ICoin<JSX.Element> = {
    etherium: <SvgEtherium customSass={customSassSvg} />,
  };
  return (
    <div className={`${style.price} ${customSass}`}>
      {svgCoin[type]}
      <span>{`${price ?? ""} ${coins[type]}`}</span>
    </div>
  );
}
