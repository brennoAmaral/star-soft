import { motion } from 'framer-motion';
import styles from "./skeleton.module.scss";
import { ISkeletonParams } from './type-skeleton';

export default function Skeleton({customStyle}:ISkeletonParams){
  return (
    <motion.div
      style={customStyle}
      className={styles.skeleton}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    />
  );
};