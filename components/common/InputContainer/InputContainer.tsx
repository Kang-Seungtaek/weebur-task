import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  useId,
} from "react";
import clsx from "clsx";

interface InputContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  name: string;
  as?: "input" | "textarea" | "select";
  inputProps?:
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>
    | SelectHTMLAttributes<HTMLSelectElement>;
}
export default function InputContainer({
  title,
  name,
  as = "input",
  inputProps,
  children,
  ...props
}: InputContainerProps) {
  const id = useId();

  const renderContent = () => {
    switch (as) {
      case "select":
        return (
          <select
            {...(inputProps as SelectHTMLAttributes<HTMLSelectElement>)}
            id={id}
            name={name}
            className={clsx(
              "w-full px-2 py-1 border border-gray-400 rounded-sm text-sm",
              inputProps?.className,
            )}
          >
            {children}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            id={id}
            name={name}
            className={clsx(
              "w-full px-2 py-1 border border-gray-400 rounded-sm text-sm",
              inputProps?.className,
            )}
          />
        );
      default:
        return (
          <input
            {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
            id={id}
            name={name}
            className={clsx(
              "w-full px-2 py-1 border border-gray-400 rounded-sm text-sm",
              inputProps?.className,
            )}
          />
        );
    }
  };

  return (
    <div
      {...props}
      className={clsx(
        "w-full flex flex-col items-start gap-y-1",
        props.className,
      )}
    >
      <label
        htmlFor={id}
        className={"text-base font-bold"}
      >
        {title}
      </label>
      {renderContent()}
    </div>
  );
}
