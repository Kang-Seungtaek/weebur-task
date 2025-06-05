import { HTMLAttributes } from "react";

export interface ProductsContainerProps extends HTMLAttributes<HTMLUListElement>{
  type?: 'list' | 'grid'
}
