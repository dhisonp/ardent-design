import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "font-mono text-sm uppercase tracking-wide",
        "px-4 py-2 rounded-none",
        "transition-colors duration-150",
        "border",

        // Variant: Primary
        variant === "primary" && [
          "bg-gray-900 text-gray-50 border-transparent",
          "hover:bg-gray-800",
          "dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
        ],

        // Variant: Secondary
        variant === "secondary" && [
          "bg-transparent border-gray-900 text-gray-900",
          "hover:bg-gray-100",
          "dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-900"
        ],

        // Variant: Ghost
        variant === "ghost" && [
          "bg-transparent text-gray-900 border-transparent",
          "hover:bg-gray-100",
          "dark:text-gray-50 dark:hover:bg-gray-900"
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
