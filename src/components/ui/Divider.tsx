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
        variant === "default" && "border-gray-900",
        variant === "strong" && "border-gray-900 border-t-2",
        className
      )}
    />
  );
}
