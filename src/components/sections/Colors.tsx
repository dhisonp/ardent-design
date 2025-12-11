import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/cn";

export function Colors() {
  const grays = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const emeralds = [400, 500, 600];
  const reds = [500, 600];
  const ambers = [400, 500];
  const indigos = [500];

  return (
    <section className="py-12">
      <div className="mb-6">
        <Label>COLORS</Label>
      </div>
      <Divider className="mb-12" />
      
      <div className="space-y-12">
        {/* Grays */}
        <div className="space-y-4">
           <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Gray</h3>
           <div className="flex flex-wrap gap-0">
             {grays.map((shade) => (
               <div key={shade} className="flex flex-col space-y-2 mr-2 mb-2">
                  <div className={cn(
                    "w-12 h-12 border border-hairline border-gray-200 dark:border-gray-700",
                    `bg-gray-${shade}`
                  )} />
                  <span className="font-mono text-xs text-gray-500">{shade}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Accents */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Emerald</h3>
             <div className="flex flex-wrap gap-2">
               {emeralds.map((shade) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", `bg-emerald-${shade}`)} />
                   <div className="font-mono text-xs text-gray-500">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Red</h3>
             <div className="flex flex-wrap gap-2">
               {reds.map((shade) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", `bg-red-${shade}`)} />
                   <div className="font-mono text-xs text-gray-500">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Amber</h3>
             <div className="flex flex-wrap gap-2">
               {ambers.map((shade) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", `bg-amber-${shade}`)} />
                   <div className="font-mono text-xs text-gray-500">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Indigo</h3>
             <div className="flex flex-wrap gap-2">
               {indigos.map((shade) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", `bg-indigo-${shade}`)} />
                   <div className="font-mono text-xs text-gray-500">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
      
      <div className="pt-12">
        <Divider />
      </div>
    </section>
  );
}
