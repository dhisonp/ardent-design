import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Old_Standard_TT } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const oldStandardTT = Old_Standard_TT({
  weight: ["400", "700"], // Regular and Bold
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
    <html lang="en" className={cn(inter.variable, ibmPlexMono.variable, oldStandardTT.variable)}>
      <body className="min-h-screen flex justify-center bg-gray-100 py-6">
        <div className="w-full max-w-[678px] min-h-full bg-white border-y border-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}
