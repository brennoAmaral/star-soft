import { HTMLAttributes } from "react";

export default interface ICardParams{
  children: JSX.Element[];
  customSass?: HTMLAttributes<HTMLDivElement>['className'];
}