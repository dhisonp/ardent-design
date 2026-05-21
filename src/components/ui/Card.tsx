import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gray-50",
        "border border-black",
        "p-4",
        "max-w-md",
        "rounded-none",
        "shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}
