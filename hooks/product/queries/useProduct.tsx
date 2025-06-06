"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { getProductsList, getProductViewType, postNewProduct } from "@api";
import { productQueryKeys } from "@hooks";

export function useProductQuery() {
  return useQuery({ queryKey: productQueryKeys.all, queryFn: getProductsList });
}

export function useProductViewTypeQuery() {
  return useQuery({
    queryKey: productQueryKeys.viewType,
    queryFn: getProductViewType,
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  });
}

export function useCreateProductMutation() {
  return useMutation({
    mutationFn: postNewProduct,
  });
}
