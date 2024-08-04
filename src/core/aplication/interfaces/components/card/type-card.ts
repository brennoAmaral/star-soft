import { IChildrensElement } from "@/core/shared/types/type-children";
import { ICustomSass } from "@/core/shared/types/type-custom-sass";
import { Attributes } from "react";

export default interface ICardParams extends IChildrensElement{
  customSass?: ICustomSass
  key?:Attributes['key']
}