import { cn } from "@/lib/cn";

type Trend = "up" | "down" | "neutral";

interface MetricCardProps {
  label: string;
  value: string;
  trend?: Trend;
  delta?: string;
  sparkline?: number[];
  className?: string;
}

function Sparkline({ data, trend }: { data: number[]; trend: Trend }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const chars = "▁▂▃▄▅▆▇█";

  const color = {
    up: "text-emerald-600",
    down: "text-red-500",
    neutral: "text-gray-400",
  }[trend];

  return (
    <span className={`font-mono text-xs tracking-tighter ${color}`}>
      {data.map((v, i) => {
        const idx = Math.round(((v - min) / range) * (chars.length - 1));
        return <span key={i}>{chars[idx]}</span>;
      })}
    </span>
  );
}

export function MetricCard({
  label,
  value,
  trend = "neutral",
  delta,
  sparkline,
  className,
}: MetricCardProps) {
  const trendArrow = {
    up: "↑",
    down: "↓",
    neutral: "→",
  }[trend];

  const trendColor = {
    up: "text-emerald-600",
    down: "text-red-500",
    neutral: "text-gray-400",
  }[trend];

  return (
    <div className={cn("p-2", className)}>
      <div className="font-mono text-xs uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xl font-bold tabular-nums">{value}</span>
        <span className={cn("font-mono text-xs", trendColor)}>
          {trendArrow}
          {delta && <span className="ml-0.5">{delta}</span>}
        </span>
      </div>
      {sparkline && (
        <div className="mt-1">
          <Sparkline data={sparkline} trend={trend} />
        </div>
      )}
    </div>
  );
}
