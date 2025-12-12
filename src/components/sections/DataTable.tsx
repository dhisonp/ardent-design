import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "@/components/ui/Table";
import { cn } from "@/lib/cn";

const processes = [
  {
    name: "nginx",
    status: "running",
    cpu: 2.3,
    memory: 128,
    uptime: "14d 6h",
    pid: 1024,
  },
  {
    name: "postgres",
    status: "running",
    cpu: 12.7,
    memory: 2048,
    uptime: "14d 6h",
    pid: 1089,
  },
  {
    name: "redis",
    status: "running",
    cpu: 0.4,
    memory: 64,
    uptime: "14d 6h",
    pid: 1156,
  },
  {
    name: "node",
    status: "warning",
    cpu: 45.2,
    memory: 512,
    uptime: "2d 14h",
    pid: 2341,
  },
  {
    name: "cron",
    status: "running",
    cpu: 0.1,
    memory: 16,
    uptime: "14d 6h",
    pid: 892,
  },
  {
    name: "backup",
    status: "stopped",
    cpu: 0.0,
    memory: 0,
    uptime: "—",
    pid: 3102,
  },
  {
    name: "mailer",
    status: "failed",
    cpu: 0.0,
    memory: 0,
    uptime: "—",
    pid: 4521,
  },
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-wide",
        status === "running" && "text-emerald-600",
        status === "warning" && "text-goldenrod-600",
        status === "failed" && "text-red-500",
        status === "stopped" && "text-gray-400"
      )}
    >
      {status}
    </span>
  );
}

export function DataTable() {
  return (
    <section className="py-6">
      <div className="mb-2">
        <Label>DATA TABLE</Label>
      </div>
      <Divider className="mb-4" />

      <div className="space-y-4">
        <p className="font-serif text-sm text-gray-600">
          Dense, information-rich display. Monospace headers signal data.
          Semantic color for status. No shadows, no decoration—only structure.
        </p>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Process</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell align="right">PID</TableHeaderCell>
              <TableHeaderCell align="right">CPU %</TableHeaderCell>
              <TableHeaderCell align="right">Memory</TableHeaderCell>
              <TableHeaderCell align="right">Uptime</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processes.map((p) => (
              <TableRow key={p.pid}>
                <TableCell variant="mono" className="font-medium">
                  {p.name}
                </TableCell>
                <TableCell>
                  <StatusBadge status={p.status} />
                </TableCell>
                <TableCell variant="mono" align="right">
                  {p.pid}
                </TableCell>
                <TableCell variant="mono" align="right">
                  {p.cpu.toFixed(1)}
                </TableCell>
                <TableCell variant="mono" align="right">
                  {p.memory > 0 ? `${p.memory} MB` : "—"}
                </TableCell>
                <TableCell variant="mono" align="right">
                  {p.uptime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="text-xs font-mono text-gray-600">
          ↑ hairline borders · mono headers · tabular numerics · semantic status
        </div>
      </div>
    </section>
  );
}
