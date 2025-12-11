import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white",
        "border border-hairline border-gray-200",
        "p-5",
        "rounded-none",
        "shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}
