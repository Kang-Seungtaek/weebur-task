import { FadeLoader } from "react-spinners";
import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function Loading({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("flex items-center justify-center", props.className)}>
      <FadeLoader color={"#22c55e"} />
    </div>
  );
}
