import { cn } from "@/lib/cn";

interface DividerProps {
  variant?: "default" | "strong" | "muted";
  className?: string;
}

export function Divider({ variant = "default", className }: DividerProps) {
  return (
    <div
      className={cn(
        "w-full border-t",
        variant === "default" && "border-gray-900 border-t-hairline",
        variant === "strong" && "border-gray-900 border-t-2",
        variant === "muted" && "border-gray-200 border-t-hairline",
        className
      )}
    />
  );
}
