import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";

const tenets = [
  {
    title: "Intentionality over style",
    description: "Every design decision requires a reason.",
  },
  {
    title: "Transparency",
    description: "Expose state. Show the system.",
  },
  {
    title: "Timelessness",
    description: "Ignore trends. Design for permanence.",
  },
  {
    title: "Density",
    description: "Screen real estate is valuable. Use it.",
  },
  {
    title: "Explicit State",
    description: "Never hide what is happening.",
  },
  {
    title: "Semantic Color",
    description: "Color has meaning, not decoration.",
  },
  {
    title: "Type as Structure",
    description: "Typography creates hierarchy, not whitespace.",
  },
  {
    title: "Rigorous alignment",
    description: "Everything aligns to the grid.",
  },
];

export function Philosophy() {
  return (
    <section className="py-12">
      <div className="mb-6">
        <Label>PHILOSOPHY</Label>
      </div>
      <Divider className="mb-8" />
      
      <div className="grid gap-6">
        {tenets.map((tenet, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-50">
              {tenet.title}
            </h3>
            <p className="text-sm font-serif text-gray-900 dark:text-gray-50">
              {tenet.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="pt-12">
        <Divider />
      </div>
    </section>
  );
}
