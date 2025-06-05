import { ProductDetail } from "@types";

export const getProductsList = async (): Promise<{ products: ProductDetail[] }> => {
  const response = await fetch(
    "https://dummyjson.com/products/search?limit=20",
    { method: "GET" },
  );

  if (!response.ok) throw new Error("상품 리스트 불러오기 실패");
  return response.json();
};
