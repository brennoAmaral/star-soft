import { TCoin } from "@/core/shared/types/type-coin";
import { ICustomSass } from "@/core/shared/types/type-custom-sass";

export interface IPriceParams{
  customSass?: ICustomSass
  customSassSvg?: ICustomSass
  price?: number
  type: TCoin
}