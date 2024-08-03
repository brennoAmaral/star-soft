import style from "./rounded-button.module.scss";
import IButtonParams from "./type-rounded-button";

export default function RoundedButton({
  children,
  onClick,
  customSass,
  type = "button",
}: IButtonParams) {
  return (
    <button type={type} onClick={onClick} className={`${style.button} ${customSass}`}>
      {children}
    </button>
  );
}
