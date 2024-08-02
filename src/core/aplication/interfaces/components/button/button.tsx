import style from './button.module.scss';
import IButtonParams from "./type-button";

export default function Button({ text, onClick, type = "button" }: IButtonParams) {
  
  return<div>
    <button type={type} onClick={onClick} className={style.button}>
      {text.toUpperCase()}
    </button>
  </div>;
}
