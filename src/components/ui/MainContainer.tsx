import { cn } from "@/lib/cn";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MainContainer({ children, className }: MainContainerProps) {
  return (
    <div 
      className={cn(
        "max-w-page mx-auto min-h-screen bg-gray-50 border-x border-gray-200 shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}
