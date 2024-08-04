import { motion } from "framer-motion";
import style from './button.module.scss';
import IButtonParams from "./type-button";
export default function Button({ text, onClick, type = "button", disabled=false }: IButtonParams) {
  
  return<div>
    <motion.button type={type} onClick={onClick} className={style.button}
     whileTap={{ scale: 0.9 }}
     whileHover={{ scale: 1 }}
     style={{
       padding: '10px 20px',
       fontSize: '16px',
       color: 'white',
       border: 'none',
       borderRadius: '5px',
       cursor: 'pointer',
       outline: 'none',
     }}
     disabled={disabled}
    >
      {text.toUpperCase()}
    </motion.button>
  </div>;
}
