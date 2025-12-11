"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export function Header() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-12 pb-12">
      {/* Theme Toggle */}
      <div className="absolute top-0 right-0 mt-4">
        {mounted && (
          <Button
            variant="secondary"
            className="text-xs px-2 py-1 border-hairline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Ardent Design
        </h1>
        <p className="text-base font-serif text-gray-900 dark:text-gray-50 max-w-lg">
          A design system for precision, intention, and timelessness.
        </p>
        
        <div className="pt-4">
          <span className="font-mono text-xs text-gray-400">v0.1.1</span>
        </div>
      </div>
      
      <div className="pt-12">
        <Divider />
      </div>
    </section>
  );
}
