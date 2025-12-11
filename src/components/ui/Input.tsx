import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-white",
        "border border-hairline border-gray-200",
        "focus:border-gray-900",
        "focus:outline-none",
        "text-sm font-mono text-gray-900",
        "placeholder:text-gray-400",
        "px-3 py-2",
        "rounded-none", // no radius
        "w-full",
        className
      )}
      {...props}
    />
  );
}
