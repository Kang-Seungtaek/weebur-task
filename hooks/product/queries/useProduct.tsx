import { useQuery } from "@tanstack/react-query";

import { getProductsList } from "@api";
import { productQueryKeys } from "@hooks";

export function useProductQuery() {
  return useQuery({ queryKey: productQueryKeys.all, queryFn: getProductsList });
}
