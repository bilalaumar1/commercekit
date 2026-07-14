import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 ${className}`}
    >
      {children}
    </button>
  );
}