import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

export function Influences() {
  return (
    <section className="py-8">
      <div className="mb-4">
        <Label>INFLUENCES</Label>
      </div>
      <Divider className="mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <Card className="border-b-0 md:border-b md:border-r-0 border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <h3 className="text-base font-sans font-bold text-gray-900 dark:text-gray-50">
              U.S. Graphics Co.
            </h3>
            <span className="font-mono text-xs text-gray-600">50%</span>
            <p className="text-sm font-serif text-gray-900 dark:text-gray-50">
              Control panels, technical docs, dense and explicit.
            </p>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="border-b-0 md:border-b md:border-r-0 border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <h3 className="text-base font-sans font-bold text-gray-900 dark:text-gray-50">
              IBM Carbon
            </h3>
            <span className="font-mono text-xs text-gray-600">30%</span>
            <p className="text-sm font-serif text-gray-900 dark:text-gray-50">
              Systematic rigor, modular components, accessibility.
            </p>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <h3 className="text-base font-sans font-bold text-gray-900 dark:text-gray-50">
              Recursive
            </h3>
            <span className="font-mono text-xs text-gray-600">20%</span>
            <p className="text-sm font-serif text-gray-900 dark:text-gray-50">
              Warmth within structure. Humanity in monospace.
            </p>
          </div>
        </Card>
      </div>
      
      <div className="pt-8">
        <Divider />
      </div>
    </section>
  );
}
