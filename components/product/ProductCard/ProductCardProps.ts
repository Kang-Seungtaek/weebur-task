import { HTMLAttributes } from "react";
import { ProductDetail, ProductViewType } from "@types";

export interface ProductCardProps extends HTMLAttributes<HTMLLIElement> {
  type?: ProductViewType;
  product: ProductDetail;
}
