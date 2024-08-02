import { motion } from "framer-motion";
import style from "./progress-bar.module.scss";
interface ProgressBarProps {
  percentage: number;
  color?: string;
}

export default function ProgressBar({ percentage}:ProgressBarProps){
  return (
    <div className={style.hundredPerCent}>
      <motion.div
        className={style.currentPercent}
        style={{
          width: `${percentage}%`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};
