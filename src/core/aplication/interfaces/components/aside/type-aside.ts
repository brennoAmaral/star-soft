import { IChildrensElement } from "@/core/shared/types/type-children";
import { ICustomSass } from "@/core/shared/types/type-custom-sass";

export default interface IAsideParams extends IChildrensElement{
  customSassBackground?: ICustomSass
  customSassCard?: ICustomSass
  tittle: string
}