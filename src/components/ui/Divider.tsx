import { cn } from "@/lib/cn";

interface DividerProps {
  variant?: "default" | "strong";
  className?: string;
}

export function Divider({ variant = "default", className }: DividerProps) {
  return (
    <div
      className={cn(
        "w-full border-t border-hairline",
        variant === "default" && "border-gray-200 dark:border-gray-800",
        variant === "strong" && "border-gray-900 dark:border-gray-50",
        className
      )}
    />
  );
}
