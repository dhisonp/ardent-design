import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";

export function Typography() {
  return (
    <section className="py-6">
      <div className="mb-2">
        <Label>TYPOGRAPHY</Label>
      </div>
      <Divider className="mb-4" />
      
      <div className="space-y-6">
        {/* Headings */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
            <span className="text-4xl font-sans font-bold text-gray-900">Display</span>
            <span className="font-mono text-xs text-gray-600">4xl Sans Bold</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
            <span className="text-3xl font-sans font-bold text-gray-900">Heading 1</span>
            <span className="font-mono text-xs text-gray-600">3xl Sans Bold</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
            <span className="text-2xl font-sans font-bold text-gray-900">Heading 2</span>
            <span className="font-mono text-xs text-gray-600">2xl Sans Bold</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
            <span className="text-xl font-sans font-bold text-gray-900">Heading 3</span>
            <span className="font-mono text-xs text-gray-600">xl Sans Bold</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
            <span className="text-lg font-sans font-bold text-gray-900">Heading 4</span>
            <span className="font-mono text-xs text-gray-600">lg Sans Bold</span>
          </div>
        </div>

        <Divider />

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base font-serif text-gray-900">
              Body text is set in a serif typeface for comfortable extended reading. The letterforms carry editorial weight, like technical papers or quality documentation.
            </p>
          </div>
          <div className="flex items-end justify-end">
             <span className="font-mono text-xs text-gray-600">Base Serif Regular</span>
          </div>
        </div>

        <Divider />

        {/* Labels & Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
             <Label>LABEL</Label>
             <div className="font-mono text-xs text-gray-600">mono xs uppercase</div>
          </div>
          <div className="space-y-2">
             <code className="font-mono text-sm text-gray-900">CODE</code>
             <div className="font-mono text-xs text-gray-600">mono sm regular</div>
          </div>
          <div className="space-y-2">
             <span className="font-mono text-xs text-gray-900">Caption</span>
             <div className="font-mono text-xs text-gray-600">mono xs regular</div>
          </div>
          <div className="space-y-2">
             <span className="font-mono text-xs text-gray-600">metadata</span>
             <div className="font-mono text-xs text-gray-600">mono xs tight</div>
          </div>
        </div>
      </div>
      
      <div className="pt-6">
        <Divider />
      </div>
    </section>
  );
}
