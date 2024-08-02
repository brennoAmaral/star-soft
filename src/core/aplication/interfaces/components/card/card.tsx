import cardStyle from "./card.module.scss";
import ICardParams from "./type-card";
export default function Card({childrens, customSass}:ICardParams) {
  return (
    <div className={`${cardStyle.card} ${customSass}`}>
      {childrens}
    </div>
  );
}
