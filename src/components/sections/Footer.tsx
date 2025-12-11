import { Divider } from "@/components/ui/Divider";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-12">
      <div className="pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="font-serif italic text-gray-900 dark:text-gray-50">
          Built with intention.
        </div>
        
        <div className="flex gap-6 items-center">
          <Link href="#" className="text-sm font-sans hover:underline text-gray-900 dark:text-gray-50">
            Repository ↗
          </Link>
          <span className="font-mono text-xs text-gray-500">2024</span>
        </div>
      </div>
    </footer>
  );
}
