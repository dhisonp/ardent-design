import type { Metadata } from "next";
import { Inter, Domine, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const domine = Domine({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500"],
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Ardent Design Showcase",
  description: "A design system for precision, intention, and timelessness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, domine.variable, ibmPlexMono.variable)}>
      <body className="min-h-screen flex justify-center bg-gray-100 py-6">
        <div className="w-full max-w-[678px] min-h-full bg-white border-y border-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
