import { dehydrate } from "@tanstack/react-query";

import { getQueryClient } from "@lib";
import { getProductsList } from "@api";

import { productQueryKeys } from "@hooks";
import { Hydrate, ProductsClient } from "@components";
import Link from "next/link";

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
      <nav
        className={
          "sticky top-0 z-10 w-full px-8 py-5 flex items-center justify-end bg-black"
        }
      >
        <Link href={"/products/new"}>
          <button
            className={"px-4 py-1 bg-white text-sm font-bold cursor-pointer"}
          >
            New
          </button>
        </Link>
      </nav>
      <ProductsClient />
    </Hydrate>
  );
}
