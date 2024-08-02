"use client"
import { IChildrenNode } from "@/core/shared/types/type-children";
import { Provider } from "react-redux";
import store from "./store";

export default function StoreProvider({ children }: IChildrenNode) {
  return <Provider store={store}>{children}</Provider>;
}
