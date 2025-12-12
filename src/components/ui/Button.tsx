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
        "px-3 py-1.5 rounded-none",
        "transition-colors duration-150",
        "border",

        // Variant: Primary
        variant === "primary" && [
          "bg-emerald-500 text-white border-transparent",
          "hover:bg-emerald-400",
          // "dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
        ],

        // Variant: Secondary
        variant === "secondary" && [
          "bg-transparent border-goldenrod-500 text-gray-900",
          "hover:bg-goldenrod-500 hover:text-white",
          // "dark:border-goldenrod-500 dark:text-gray-50 dark:hover:bg-goldenrod-500 dark:hover:text-gray-900"
        ],

        // Variant: Ghost
        variant === "ghost" && [
          "bg-transparent text-gray-900 border-transparent",
          "hover:bg-gray-100",
          // "dark:text-gray-50 dark:hover:bg-gray-900"
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
