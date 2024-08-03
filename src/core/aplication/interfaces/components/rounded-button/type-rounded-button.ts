import { ButtonHTMLAttributes } from "react"

export default interface IRoundedButtonParams{
  children: React.ReactElement,
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick: ()=>void,
}