"use client";

import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

import { InputContainer } from "@components";

interface ControlledInputProps<T extends FieldValues> {
  name: Path<T>;
  title: string;
  control: Control<T>;
  as?: "input" | "textarea" | "select";
  errorMessage?: string;
  placeholder?: string;
  children?: React.ReactNode;
}
export default function ControlledInput<T extends FieldValues>({
  name,
  title,
  control,
  as = "input",
  placeholder,
  errorMessage,
  children,
}: ControlledInputProps<T>) {
  return (
    <div className={"w-full flex flex-col gap-y-1"}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <InputContainer
              title={title}
              name={name}
              as={as}
              inputProps={{
                ...field,
                value: field.value ?? "",
                placeholder,
              }}
            >
              {children}
            </InputContainer>
          );
        }}
      />
      {errorMessage && (
        <span className={"text-sm text-red-500 font-bold"}>{errorMessage}</span>
      )}
    </div>
  );
}
