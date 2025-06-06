"use client";

import React, { Children, cloneElement } from "react";
import clsx from "clsx";

import { ProductViewType } from "@types";
import { ProductsContainerProps } from "./ProductsContainerProps";

import { useProductViewTypeQuery } from "@hooks";
import { Loading } from "@components";

export default function ProductsContainer({
  children,
  isQueriesLoading = false,
  ...props
}: ProductsContainerProps) {
  const { data, isLoading } = useProductViewTypeQuery();

  if (isLoading || isQueriesLoading) {
    return <Loading className={"-my-6 h-screen"} />;
  }

  return (
    <ul
      className={clsx(
        "w-full lg:w-container px-4",
        data?.type === "list" && "flex flex-col gap-y-4",
        data?.type === "grid" && "grid grid-cols-2 lg:grid-cols-4 gap-4",
        props.className,
      )}
      {...props}
    >
      {Children.map(children, (child) => {
        if (React.isValidElement<{ type?: ProductViewType }>(child)) {
          return cloneElement(child, { type: data?.type });
        }
        return child;
      })}
    </ul>
  );
}
