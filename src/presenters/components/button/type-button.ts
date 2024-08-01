import { ButtonHTMLAttributes } from "react"

export default interface IButtonParams{
  text: string,
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick: ()=>void,
}