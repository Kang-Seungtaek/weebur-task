import Image from "next/image";
import clsx from "clsx";

import { ProductCardProps } from "./ProductCardProps";

export default function ProductCard({
  type = "list",
  product,
  ...props
}: ProductCardProps) {
  const { title, thumbnail, description, rating, reviews } = product;

  return (
    <li
      {...props}
      className={clsx(
        "w-full flex items-stretch pt-2 pb-4 px-4 transition-transform duration-200 hover:scale-105 shadow-md",
        type === "list" && "flex-row gap-x-4",
        type === "grid" && "flex-col",
        props.className,
      )}
    >
      <Image
        alt={`product-${title}-image`}
        src={thumbnail}
        width={200}
        height={200}
      />
      <div
        className={"w-full flex flex-col items-start justify-between gap-y-2"}
      >
        <div className={"flex flex-col items-start"}>
          <span
            className={clsx(
              "text-lg font-bold",
              type === "grid" && "line-clamp-1",
            )}
          >
            {title}
          </span>
          <span className={"text-sm text-gray-400 line-clamp-5"}>
            {description}
          </span>
        </div>
        <div
          className={clsx(
            "mt-2 w-full flex items-center gap-x-4",
            type === "grid" && "justify-between",
          )}
        >
          <span className={"text-sm text-gray-400"}>
            Rating: <b className={"text-green-500"}>{rating}</b>
          </span>
          <span className={"text-sm text-gray-400"}>
            Reviews: <b className={"text-green-500"}>{reviews.length}</b>
          </span>
        </div>
      </div>
    </li>
  );
}
