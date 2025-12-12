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
        "font-sans text-sm font-medium uppercase tracking-wide",
        "px-3 py-1.5 rounded-none",
        "border",

        // Variant: Primary
        variant === "primary" && [
          "bg-emerald-400 text-black border-black",
          "hover:bg-emerald-500 hover:border-emerald-500",
        ],

        // Variant: Secondary
        variant === "secondary" && [
          "bg-transparent border-goldenrod-500 text-gray-900",
          "hover:bg-goldenrod-500 hover:text-white",
        ],

        // Variant: Ghost
        variant === "ghost" && [
          "bg-transparent text-gray-900 border-transparent",
          "hover:bg-gray-100",
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
