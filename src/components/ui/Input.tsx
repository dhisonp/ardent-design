import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-white dark:bg-gray-900",
        "border border-hairline border-gray-200 dark:border-gray-800",
        "focus:border-gray-900 dark:focus:border-gray-50",
        "focus:outline-none",
        "text-sm font-mono text-gray-900 dark:text-gray-50",
        "placeholder:text-gray-400",
        "px-3 py-2",
        "rounded-sm", // 2px radius
        "w-full",
        className
      )}
      {...props}
    />
  );
}
