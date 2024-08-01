import cardStyle from "./card.module.scss";
import ICardParams from "./type-card";
export default function Card({children, customSass}:ICardParams) {
  return (
    <div className={`${cardStyle.card} ${customSass}`}>
      {children}
    </div>
  );
}
