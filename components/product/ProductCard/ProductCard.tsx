import { ProductCardProps } from "./ProductCardProps";

export default function ProductCard({...props}:ProductCardProps) {
  return <div {...props}>PRODUCT_CARD</div>
}
