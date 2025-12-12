import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-white",
        "border border-gray-900",
        "focus:border-gray-900",
        "focus:outline-none",
        "text-sm font-sans text-gray-900",
        "placeholder:text-gray-400",
        "px-2.5 py-1.5",
        "rounded-none", // no radius
        "w-full",
        className
      )}
      {...props}
    />
  );
}
