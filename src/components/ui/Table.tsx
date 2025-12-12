import { cn } from "@/lib/cn";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className={cn("border border-gray-400 overflow-x-auto", className)}>
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <thead className={cn("border-b border-gray-400", className)}>
      {children}
    </thead>
  );
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
  return <tbody className={className}>{children}</tbody>;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={cn("border-b border-gray-200 last:border-b-0", className)}>
      {children}
    </tr>
  );
}

interface TableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
}

export function TableHeaderCell({
  children,
  className,
  align = "left",
}: TableHeaderCellProps) {
  return (
    <th
      className={cn(
        "py-2 px-3",
        "font-mono text-xs font-medium uppercase tracking-wide",
        "text-gray-600 bg-gray-50",
        align === "right" && "text-right",
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </th>
  );
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
  variant?: "text" | "mono";
}

export function TableCell({
  children,
  className,
  align = "left",
  variant = "text",
}: TableCellProps) {
  return (
    <td
      className={cn(
        "py-2 px-3",
        variant === "text" && "font-serif text-base",
        variant === "mono" && "font-mono text-sm tabular-nums",
        align === "right" && "text-right",
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </td>
  );
}
