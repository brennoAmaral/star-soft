import { ICustomSass } from "@/core/shared/types/type-custom-sass";
import { ReactElement } from "react";

export default interface IAsideParams{
  customSassBackground?: ICustomSass
  customSassCard?: ICustomSass
  tittle: string,
  children: ReactElement
}