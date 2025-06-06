import * as Yup from "yup";

// export interface ProductFormData {
//   title: string;
//   description?: string | undefined;
//   price: number;
//   discountPercentage?: number | undefined;
//   brand: "Apple" | "Samsung" | "Weebur";
// }

export const productFormSchema = Yup.object().shape({
  title: Yup.string()
    .required("필수 입력항목입니다.")
    .max(15, "15자 이내로 입력되어야 합니다."),
  description: Yup.string().notRequired(),
  price: Yup.number()
    .required("필수 입력항목입니다.")
    .typeError("숫자만 입력 가능합니다.")
    .min(1000, "1,000원 이상으로 입력해야 합니다."),
  discountPercentage: Yup.number()
    .notRequired()
    .typeError("숫자만 입력 가능합니다.")
    .max(100, "100이내로 입력해야 합니다."),
  brand: Yup.string()
    .required("필수 입력항목입니다.")
    .oneOf(
      ["Apple", "Samsung", "Weebur"],
      "Apple  Samsung  Weebur  중 하나가 선택 되어야 합니다.",
    ),
});

export type ProductFormData = Yup.InferType<typeof productFormSchema>;

export const initProductValues: ProductFormData = {
  title: "",
  price: 0,
  brand: "Weebur",
};
