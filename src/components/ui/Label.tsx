import { cn } from "@/lib/cn";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: LabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-wider text-gray-500",
        className
      )}
    >
      {children}
    </span>
  );
}
