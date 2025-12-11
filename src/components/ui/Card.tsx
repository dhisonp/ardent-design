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
        "border border-gray-900",
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
