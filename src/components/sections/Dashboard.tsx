import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { MetricCard } from "@/components/ui/MetricCard";
import { cn } from "@/lib/cn";

const metrics = [
  {
    label: "Active Flights",
    value: "2,847",
    trend: "up" as const,
    delta: "+12",
    sparkline: [42, 45, 41, 48, 52, 49, 55, 58, 54, 61, 59, 63],
  },
  {
    label: "On-Time",
    value: "94.2%",
    trend: "up" as const,
    delta: "+1.8",
    sparkline: [88, 89, 91, 90, 92, 91, 93, 92, 94, 93, 95, 94],
  },
  {
    label: "Delayed",
    value: "142",
    trend: "down" as const,
    delta: "-23",
    sparkline: [180, 175, 168, 172, 165, 158, 162, 155, 148, 152, 145, 142],
  },
  {
    label: "Cancelled",
    value: "8",
    trend: "down" as const,
    delta: "-4",
    sparkline: [15, 12, 14, 11, 13, 10, 12, 9, 11, 8, 10, 8],
  },
  {
    label: "Fleet Active",
    value: "312",
    trend: "neutral" as const,
    sparkline: [310, 312, 311, 313, 312, 314, 312, 313, 311, 312, 313, 312],
  },
  {
    label: "Maintenance",
    value: "24",
    trend: "up" as const,
    delta: "+3",
    sparkline: [18, 19, 20, 19, 21, 20, 22, 21, 23, 22, 24, 24],
  },
  {
    label: "Fleet Age",
    value: "8.4yr",
    trend: "neutral" as const,
  },
  {
    label: "Utilization",
    value: "11.2hr",
    trend: "up" as const,
    delta: "+0.4",
    sparkline: [9.8, 10.1, 10.3, 10.2, 10.5, 10.4, 10.8, 10.7, 11.0, 10.9, 11.2, 11.2],
  },
  {
    label: "Pax Today",
    value: "284K",
    trend: "up" as const,
    delta: "+8%",
    sparkline: [245, 252, 248, 261, 255, 268, 272, 265, 278, 282, 275, 284],
  },
  {
    label: "Load Factor",
    value: "87.3%",
    trend: "up" as const,
    delta: "+2.1",
    sparkline: [82, 83, 84, 83, 85, 84, 86, 85, 87, 86, 88, 87],
  },
  {
    label: "Connections",
    value: "42.1K",
    trend: "neutral" as const,
    sparkline: [41, 42, 41, 43, 42, 43, 42, 43, 41, 42, 43, 42],
  },
  {
    label: "Bags",
    value: "312K",
    trend: "up" as const,
    delta: "+6%",
    sparkline: [285, 290, 288, 295, 292, 300, 298, 305, 302, 310, 308, 312],
  },
];

const alerts = [
  { type: "warning", code: "WX-142", message: "ORD ground stop until 1845Z" },
  { type: "info", code: "MX-089", message: "N742UA returned to service" },
  { type: "warning", code: "WX-143", message: "DEN flow control 15 min delays" },
  { type: "error", code: "OPS-12", message: "JFK Runway 13L/31R closed" },
];

export function Dashboard() {
  return (
    <section className="py-6">
      <div className="mb-2">
        <Label>DASHBOARD</Label>
      </div>
      <Divider className="mb-3" />

      <div className="space-y-3">
        <p className="font-serif text-base text-gray-700">
          Dense metrics grid with ASCII sparklines. Information-rich, exposing
          trends transparently. Semantic status indicators.
        </p>

        <div className="border border-gray-900">
          <div className="grid grid-cols-4">
            {metrics.map((m, i) => {
              const isLastColumn = (i + 1) % 4 === 0;
              const isLastRow = i >= metrics.length - 4;
              
              return (
                <MetricCard
                  key={m.label}
                  label={m.label}
                  value={m.value}
                  trend={m.trend}
                  delta={m.delta}
                  sparkline={m.sparkline}
                  className={cn(
                    "border-r border-b border-gray-900",
                    isLastColumn && "border-r-0",
                    isLastRow && "border-b-0"
                  )}
                />
              );
            })}
          </div>
        </div>

        <div className="border border-gray-900 p-2">
          <div className="font-mono text-xs uppercase tracking-wide text-gray-500 mb-2">
            System Alerts
          </div>
          <div className="space-y-1">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-start gap-2 font-mono text-xs">
                <span
                  className={
                    a.type === "error"
                      ? "text-red-500"
                      : a.type === "warning"
                        ? "text-goldenrod-600"
                        : "text-ocean-600"
                  }
                >
                  [{a.code}]
                </span>
                <span className="text-gray-900">{a.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="font-mono text-xs text-gray-500">
          ↑ emerald · ↓ red · → stable · ▁▂▃▄▅▆▇█ 12-hr trend
        </div>
      </div>
    </section>
  );
}
