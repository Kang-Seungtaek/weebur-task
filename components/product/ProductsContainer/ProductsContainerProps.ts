import { HTMLAttributes } from "react";
import { ProductViewType } from "@types";

export interface ProductsContainerProps
  extends HTMLAttributes<HTMLUListElement> {
  type?: ProductViewType;
  isQueriesLoading?: boolean;
}
