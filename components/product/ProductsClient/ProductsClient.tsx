"use client";

import React, { HTMLAttributes } from "react";

import clsx from "clsx";

import { useProductQuery } from "@hooks";
import { ProductCard, ProductsContainer } from "@components";

export default function ProductsClient({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { data, isLoading } = useProductQuery();

  return (
    <div
      className={clsx(
        "w-full flex flex-col items-center py-6",
        props.className,
      )}
    >
      <ProductsContainer isQueriesLoading={isLoading}>
        {data?.products.map((product, index) => {
          return (
            <ProductCard
              key={`${product.title}-${index}`}
              product={product}
            />
          );
        })}
      </ProductsContainer>
    </div>
  );
}
