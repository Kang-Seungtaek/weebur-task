"use client";

import React from "react";
import { ProductsClientProps } from "./ProductsClientProps";

import clsx from "clsx";

import { useProductQuery } from "@hooks";
import { ProductCard, ProductsContainer } from "@components";

export default function ProductsClient({ ...props }: ProductsClientProps) {
  const { data, isLoading, isError } = useProductQuery();

  return (
    <div className={clsx("w-full flex flex-col items-center", props.className)}>
      <ProductsContainer>
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
