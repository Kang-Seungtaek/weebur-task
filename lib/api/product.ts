import { ProductDetail, ProductViewType } from "@types";
import { ProductFormData } from "@hooks";

export const getProductsList = async (): Promise<{
  products: ProductDetail[];
}> => {
  const response = await fetch(
    "https://dummyjson.com/products/search?limit=20",
    { method: "GET" },
  );

  if (!response.ok) throw new Error("상품 리스트 불러오기 실패");
  return response.json();
};

export const getProductViewType = async (): Promise<{
  type: ProductViewType;
  expiry: number;
}> => {
  const response = await fetch("/api/product/view-type", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error("상품 뷰 타입 불러오기 실패");
  return response.json();
};

export const postNewProduct = async (data: ProductFormData) => {
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("새 상품 생성 실패");
  return response.json();
};
