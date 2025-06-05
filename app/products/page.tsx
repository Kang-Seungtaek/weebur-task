import { dehydrate } from "@tanstack/react-query";

import { getQueryClient } from "@lib";
import { getProductsList } from "@api";

import { productQueryKeys } from "@hooks";
import { Hydrate, ProductsClient } from "@components";

export default async function Page() {
  const queryClient = getQueryClient();
  try {
    await queryClient.prefetchQuery({
      queryKey: productQueryKeys.all,
      queryFn: getProductsList,
    });
  } catch (error) {
    console.error(error);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate dehydratedState={dehydratedState}>
      <ProductsClient />
    </Hydrate>
  );
}
