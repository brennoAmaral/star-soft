import SvgBag from "../svg/svg-bag";
import SvgLogo from "../svg/svg-logo";
import style from "./header.module.scss";
export default function Header() {
  return (
    <header>
      <SvgLogo />
      <div className={style.bagContainer}>
        <SvgBag />
        <span>
          0
        </span>
      </div>
    </header>
  );
}
