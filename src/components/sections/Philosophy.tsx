import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";

const tenets = [
  {
    title: "Intentionality Over Style",
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
    title: "Precision",
    description: "Engineered, not decorated.",
  },
  {
    title: "Functional Density",
    description: "As complex as it needs to be. No more, no less.",
  },
  {
    title: "Warmth Through Craft",
    description: "The human is visible in the details.",
  },
  {
    title: "Performance Is Design",
    description: "Fast, lightweight, no bloat.",
  },
  {
    title: "Respect for Users",
    description: "Don't infantilize.",
  },
];

export function Philosophy() {
  return (
    <section className="py-4">
      <div className="mb-2">
        <Label>PHILOSOPHY</Label>
      </div>
      <Divider className="mb-3" />

      <div className="grid gap-1.5">
        {tenets.map((tenet, index) => (
          <div key={index} className="space-y-0.5">
            <h3 className="font-sans font-bold text-gray-700">{tenet.title}</h3>
            <p className="font-serif text-gray-900">{tenet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
