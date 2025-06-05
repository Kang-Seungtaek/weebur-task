import { ProductsContainerProps } from "./ProductsContainerProps";
import clsx from "clsx";

export default function ProductsContainer({
  type = "grid",
  children,
  ...props
}: ProductsContainerProps) {
  return (
    <ul
      className={clsx(
        "w-full lg:w-container px-4",
        type === "list" && "flex flex-col gap-y-2",
        type === "grid" && "grid grid-cols-2 lg:grid-cols-4 gap-2",
        props.className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
