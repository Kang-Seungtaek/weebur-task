import Image from "next/image";
import clsx from "clsx";

import { ProductCardProps } from "./ProductCardProps";

export default function ProductCard({ product, ...props }: ProductCardProps) {
  const { title, thumbnail, description, rating, reviews } = product;

  return (
    <li
      className={clsx("", props.className)}
      {...props}
    >
      <span>{title}</span>
      <Image
        alt={`product-${title}-image`}
        src={thumbnail}
        width={200}
        height={200}
      />
    </li>
  );
}
