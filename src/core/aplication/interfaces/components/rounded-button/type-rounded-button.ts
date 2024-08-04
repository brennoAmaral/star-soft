import { ICustomSass } from "@/core/shared/types/type-custom-sass"
import { ButtonHTMLAttributes } from "react"

export default interface IRoundedButtonParams{
  children: React.ReactElement,
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
  customSass?: ICustomSass
  onClick: ()=>void,
}