import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Components() {
  return (
    <section className="py-6">
      <div className="mb-2">
        <Label>COMPONENTS</Label>
      </div>
      <Divider className="mb-4" />
      
      <div className="space-y-6">
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-sm font-sans font-bold text-gray-900">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex gap-12 pt-2">
             <div className="text-xs font-mono text-gray-600 w-[84px] text-center">↑ solid<br/>dark bg</div>
             <div className="text-xs font-mono text-gray-600 w-[100px] text-center">↑ outlined<br/>hairline</div>
             <div className="text-xs font-mono text-gray-600 w-[60px] text-center">↑ text only<br/>no border</div>
          </div>
        </div>

        <Divider />

        {/* Card */}
        <div className="space-y-4">
          <h3 className="text-sm font-sans font-bold text-gray-900">Card</h3>
          <Card className="max-w-xl">
             <div className="space-y-4">
               <h4 className="font-sans font-bold text-gray-900">Card Title</h4>
               <p className="font-serif text-gray-900">
                 Card content in serif. This is body text demonstrating how a card contains information.
               </p>
               <div className="pt-2">
                 <span className="font-mono text-xs text-gray-600">metadata · 2024-01-15</span>
               </div>
             </div>
          </Card>
        </div>

        <Divider />

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-sans font-bold text-gray-900">Links</h3>
          <div className="flex gap-8">
            <Link href="#" className="underline hover:text-gray-600 font-serif text-gray-900">
              Internal link →
            </Link>
            <a href="#" className="underline hover:text-gray-600 font-serif text-gray-900">
              External link ↗
            </a>
          </div>
          <div className="text-xs font-mono text-gray-600 pt-1">↑ underline, hover = gray-600</div>
        </div>

        <Divider />

        {/* Dividers */}
        <div className="space-y-4">
           <h3 className="text-sm font-sans font-bold text-gray-900">Dividers</h3>
           <div className="space-y-4">
             <div className="space-y-1">
               <Divider variant="default" />
               <div className="text-xs font-mono text-gray-600 text-right">Default (gray-900)</div>
             </div>
             <div className="space-y-1">
               <Divider variant="strong" />
               <div className="text-xs font-mono text-gray-600 text-right">Strong (gray-900, 2px)</div>
             </div>
           </div>
        </div>

        <Divider />

        {/* Input */}
        <div className="space-y-4">
           <h3 className="text-sm font-sans font-bold text-gray-900">Input</h3>
           <div className="max-w-md">
             <Input placeholder="Placeholder text" />
           </div>
           <div className="text-xs font-mono text-gray-600 pt-1">↑ hairline border, no radius</div>
        </div>

      </div>
      
      <div className="pt-6">
        <Divider />
      </div>
    </section>
  );
}
