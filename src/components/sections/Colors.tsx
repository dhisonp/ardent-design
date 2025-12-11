import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/cn";

export function Colors() {
  const grays = [
    { shade: 50, className: "bg-gray-50" },
    { shade: 100, className: "bg-gray-100" },
    { shade: 200, className: "bg-gray-200" },
    { shade: 300, className: "bg-gray-300" },
    { shade: 400, className: "bg-gray-400" },
    { shade: 500, className: "bg-gray-500" },
    { shade: 600, className: "bg-gray-600" },
    { shade: 700, className: "bg-gray-700" },
    { shade: 800, className: "bg-gray-800" },
    { shade: 900, className: "bg-gray-900" },
    { shade: 950, className: "bg-gray-950" },
  ];

  const primitives = [
    { name: "White", className: "bg-white", hex: "#FFFFFF" },
    { name: "Black", className: "bg-black", hex: "#000000" },
  ];
  
  const emeralds = [
    { shade: 50, className: "bg-emerald-50" },
    { shade: 100, className: "bg-emerald-100" },
    { shade: 200, className: "bg-emerald-200" },
    { shade: 300, className: "bg-emerald-300" },
    { shade: 400, className: "bg-emerald-400" },
    { shade: 500, className: "bg-emerald-500" },
    { shade: 600, className: "bg-emerald-600" },
    { shade: 700, className: "bg-emerald-700" },
    { shade: 800, className: "bg-emerald-800" },
    { shade: 900, className: "bg-emerald-900" },
  ];
  
  const reds = [
    { shade: 50, className: "bg-red-50" },
    { shade: 100, className: "bg-red-100" },
    { shade: 200, className: "bg-red-200" },
    { shade: 300, className: "bg-red-300" },
    { shade: 400, className: "bg-red-400" },
    { shade: 500, className: "bg-red-500" },
    { shade: 600, className: "bg-red-600" },
    { shade: 700, className: "bg-red-700" },
    { shade: 800, className: "bg-red-800" },
    { shade: 900, className: "bg-red-900" },
  ];

  const oceans = [
    { shade: 50, className: "bg-ocean-50" },
    { shade: 100, className: "bg-ocean-100" },
    { shade: 200, className: "bg-ocean-200" },
    { shade: 300, className: "bg-ocean-300" },
    { shade: 400, className: "bg-ocean-400" },
    { shade: 500, className: "bg-ocean-500" },
    { shade: 600, className: "bg-ocean-600" },
    { shade: 700, className: "bg-ocean-700" },
    { shade: 800, className: "bg-ocean-800" },
    { shade: 900, className: "bg-ocean-900" },
  ];

  const goldenrods = [
    { shade: 50, className: "bg-goldenrod-50" },
    { shade: 100, className: "bg-goldenrod-100" },
    { shade: 200, className: "bg-goldenrod-200" },
    { shade: 300, className: "bg-goldenrod-300" },
    { shade: 400, className: "bg-goldenrod-400" },
    { shade: 500, className: "bg-goldenrod-500" },
    { shade: 600, className: "bg-goldenrod-600" },
    { shade: 700, className: "bg-goldenrod-700" },
    { shade: 800, className: "bg-goldenrod-800" },
    { shade: 900, className: "bg-goldenrod-900" },
  ];

  const ambers = [
    { shade: 500, className: "bg-amber-500" },
  ];

  return (
    <section className="py-8">
      <div className="mb-4">
        <Label>COLORS</Label>
      </div>
      <Divider className="mb-6" />
      
      <div className="space-y-8">
        {/* Primitives */}
        <div className="space-y-4">
           <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Primitives</h3>
           <div className="flex flex-wrap gap-4">
             {primitives.map(({ name, className, hex }) => (
               <div key={name} className="flex flex-col space-y-2">
                  <div className={cn(
                    "w-12 h-12 border border-hairline border-gray-200 dark:border-gray-700",
                    className
                  )} />
                  <span className="font-mono text-xs text-gray-600">{name}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Grays */}
        <div className="space-y-4">
           <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Gray</h3>
           <div className="flex flex-wrap gap-0">
             {grays.map(({ shade, className }) => (
               <div key={shade} className="flex flex-col space-y-2 mr-2 mb-2">
                  <div className={cn(
                    "w-12 h-12 border border-hairline border-gray-200 dark:border-gray-700",
                    className
                  )} />
                  <span className="font-mono text-xs text-gray-600">{shade}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Emeralds */}
          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Emerald</h3>
             <div className="flex flex-wrap gap-2">
               {emeralds.map(({ shade, className }) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", className)} />
                   <div className="font-mono text-xs text-gray-600">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Oceans */}
          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Ocean</h3>
             <div className="flex flex-wrap gap-2">
               {oceans.map(({ shade, className }) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", className)} />
                   <div className="font-mono text-xs text-gray-600">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Goldenrods */}
          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Goldenrod</h3>
             <div className="flex flex-wrap gap-2">
               {goldenrods.map(({ shade, className }) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", className)} />
                   <div className="font-mono text-xs text-gray-600">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Reds */}
          <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Red</h3>
             <div className="flex flex-wrap gap-2">
               {reds.map(({ shade, className }) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", className)} />
                   <div className="font-mono text-xs text-gray-600">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

           {/* Ambers */}
           <div className="space-y-4">
             <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">Amber</h3>
             <div className="flex flex-wrap gap-2">
               {ambers.map(({ shade, className }) => (
                 <div key={shade} className="space-y-1">
                   <div className={cn("w-12 h-12 border border-hairline border-gray-200", className)} />
                   <div className="font-mono text-xs text-gray-600">{shade}</div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
      
      <div className="pt-8">
        <Divider />
      </div>
    </section>
  );
}
