"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  initProductValues,
  ProductFormData,
  productFormSchema,
  useCreateProductMutation,
} from "@hooks";
import { ControlledInput } from "@components";

export default function ProductForm() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: yupResolver(productFormSchema) as Resolver<ProductFormData>,
    defaultValues: initProductValues,
  });

  const router = useRouter();
  const createMutation = useCreateProductMutation();

  const values = watch();

  const expectedPrice = useMemo(() => {
    if (errors.price || errors.discountPercentage) return 0;
    return (
      values.price - (values.price / 100) * (values.discountPercentage ?? 0)
    );
  }, [values, errors]);

  const onSubmit = (data: ProductFormData) => {
    createMutation.mutate(data, {
      onSuccess: () => router.push("/products"),
      onError: (error) => {
        console.error(error);
        alert("상품 등록에 실패했습니다, 잠시 후 다시 시도해 주세요");
      },
    });
  };

  return (
    <form
      className={
        "w-full px-6 py-8 lg:w-container flex flex-col gap-y-4 shadow-md"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <ControlledInput<ProductFormData>
        as='input'
        name='title'
        title='Title'
        errorMessage={errors.title?.message}
        control={control}
      />
      <ControlledInput<ProductFormData>
        as='textarea'
        name='description'
        title='Description'
        control={control}
      />
      <ControlledInput<ProductFormData>
        as='input'
        name='price'
        title='Price'
        errorMessage={errors.price?.message}
        control={control}
      />
      <ControlledInput<ProductFormData>
        as='input'
        name='discountPercentage'
        title='Discount Percentage'
        errorMessage={errors.discountPercentage?.message}
        control={control}
      />
      <ControlledInput<ProductFormData>
        as='select'
        name='brand'
        title='Brand'
        errorMessage={errors.brand?.message}
        control={control}
      >
        <option value=''>Select a Brand</option>
        <option value='Apple'>Apple</option>
        <option value='Samsung'>Samsung</option>
        <option value='Weebur'>Weebur</option>
      </ControlledInput>
      <span className={"text-sm font-bold"}>
        Expected Price: {expectedPrice.toLocaleString()}won
      </span>
      <button
        type={"submit"}
        className={
          "w-full py-1.5 cursor-pointer text-sm text-white font-bold bg-black hover:bg-gray-800"
        }
      >
        Submit
      </button>
    </form>
  );
}
