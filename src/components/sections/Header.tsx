"use client";

import { Divider } from "@/components/ui/Divider";

export function Header() {
  return (
    <section className="relative pt-6 pb-2">
      <div className="space-y-4">
        <h1 className="text-4xl font-sans font-bold tracking-tight text-gray-900">Ardent Design</h1>

        <Divider variant="strong" />

        <p className="text-base font-serif text-gray-900 max-w-lg">
          A design system for precision, intention, and timelessness.
        </p>
        <span className="font-mono text-xs text-gray-600">v0.1.0</span>
      </div>
    </section>
  );
}
