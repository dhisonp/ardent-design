import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900",
        "border border-hairline border-gray-200 dark:border-gray-800",
        "p-6",
        "rounded-none",
        "shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}
