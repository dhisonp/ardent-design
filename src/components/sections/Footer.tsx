import { Divider } from "@/components/ui/Divider";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-8">
      <div className="pt-6 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="font-serif italic text-gray-900">
          Built with intention.
        </div>
        
        <div className="flex gap-6 items-center">
          <Link href="#" className="text-sm font-sans hover:underline text-gray-900">
            Repository ↗
          </Link>
          <span className="font-mono text-xs text-gray-600">2024</span>
        </div>
      </div>
    </footer>
  );
}
