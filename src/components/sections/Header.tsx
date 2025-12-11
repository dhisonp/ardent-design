"use client";

import { Divider } from "@/components/ui/Divider";

export function Header() {
  return (
    <section className="relative pt-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Ardent Design
        </h1>
        <p className="text-base font-serif text-gray-900 dark:text-gray-50 max-w-lg">
          A design system for precision, intention, and timelessness.
        </p>
        
        <div className="pt-4">
          <span className="font-mono text-xs text-gray-400">v0.1.0</span>
        </div>
      </div>
      
      <div className="pt-12">
        <Divider />
      </div>
    </section>
  );
}
