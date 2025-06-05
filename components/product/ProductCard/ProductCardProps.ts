import { HTMLAttributes } from "react";
import { ProductDetail } from "@types";

export interface ProductCardProps extends HTMLAttributes<HTMLLIElement> {
  product: ProductDetail;
}
